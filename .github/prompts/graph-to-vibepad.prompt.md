---
mode: agent
description: Fetch open tasks and projects from Microsoft Graph and output a vibepad import file
---

You are a Microsoft Graph API agent. Your job is to:
1. Query Microsoft Graph for ALL open (not completed) tasks across every available source
2. Output a single JSON blob in the vibepad import format shown below

## Step 1 — Query these Graph endpoints

Run all queries as the signed-in user (`/me`). Skip any endpoint that returns 403 or 404.

| Source | Endpoint | Filter |
|--------|----------|--------|
| To Do tasks | `GET /me/todo/lists` then `GET /me/todo/lists/{listId}/tasks` per list | `$filter=status ne 'completed'` |
| Planner tasks | `GET /me/planner/tasks` | `$filter=percentComplete ne 100` — then `GET /planner/tasks/{taskId}/details` for each |
| Planner plans (for grouping) | `GET /me/planner/plans` then `GET /planner/plans/{planId}/tasks` | `$filter=percentComplete ne 100` |
| Unified tasks (if available) | `GET /me/tasks/lists` then tasks per list | `$filter=status ne 'completed'` |

Deduplicate: if the same task appears in both Planner `/me/planner/tasks` and a plan query, include it only once.

## Step 2 — Map to vibepad format

Apply these rules to produce the final object:

### Projects
A **project** is any of:
- A Microsoft To Do **list** that has more than one open task, OR has a name that isn't "Tasks" / "Flagged Emails" / "Assigned to me"
- A Microsoft **Planner plan** that has any open tasks

Map each to:
```json
{
  "id": "<use the Graph object id>",
  "type": "project",
  "title": "<list or plan displayName>",
  "done": false,
  "flagged": false,
  "notes": [],
  "priority": null,
  "due": null,
  "subtasks": [ /* tasks inside this list/plan — see below */ ]
}
```

### Standalone tasks
A **task** is any To Do task in a "Tasks" / "Assigned to me" / single-item list, or any task that doesn't belong to a project group above.

```json
{
  "id": "<Graph task id>",
  "type": "task",
  "title": "<task title>",
  "done": false,
  "flagged": <true if importance=="high" or task is flagged>,
  "notes": [],
  "priority": <see mapping below>,
  "due": "<YYYY-MM-DD or null>",
  "subtasks": []
}
```

### Subtasks (inside a project)
```json
{
  "id": "<Graph task id>",
  "title": "<task title>",
  "done": false,
  "flagged": <true if importance=="high">,
  "notes": [],
  "priority": <see mapping below>,
  "due": "<YYYY-MM-DD or null>"
}
```

### Field mappings

| vibepad field | Graph source |
|---|---|
| `id` | Graph object `id` (string, use as-is) |
| `title` | `title` (To Do) or `title` (Planner) |
| `done` | always `false` — you're only fetching open items |
| `flagged` | `importance == "high"` (To Do) or Planner task has a red label |
| `priority` | see table below |
| `due` | `dueDateTime.dateTime` sliced to `YYYY-MM-DD`, or `null` |
| `notes` | `[]` — do not attempt to map body/checklist items |

#### Priority mapping

| Graph value | vibepad value |
|---|---|
| `importance: "high"` | `"high"` |
| `importance: "normal"` | `null` |
| `importance: "low"` | `"low"` |
| Planner `priority` 1–3 | `"high"` |
| Planner `priority` 4–6 | `null` |
| Planner `priority` 7–9 | `"low"` |
| anything else / missing | `null` |

## Step 3 — Output

Respond with **only** the JSON — no explanation, no markdown fences, no comments. The output must be valid JSON that can be pasted directly into the vibepad import dialog.

```
{
  "tasks": [ ... ]
}
```

Order: projects first (sorted by title), then standalone tasks (sorted by title). Within each project, subtasks sorted by title.
