# vp Vibepad

A minimal, offline-first task manager built as a single-file PWA. No framework, no build step, no backend — just HTML, CSS, and vanilla JS stored in your browser.

**[→ Open Vibepad](https://dsalfen.github.io/cockpit)**

---

## Features

- **Quick capture** — press `I` anywhere to drop a thought into the inbox, then triage it later
- **Projects & tasks** — organize work into projects with subtasks, or keep standalone tasks
- **Priority levels** — click the dot on any item to cycle through high / med / low
- **Due dates** — set deadlines; overdue items surface automatically in the flagged zone
- **Flagged & overdue zone** — a focused view of what needs attention now
- **Drag to reorder** — reorder tasks and subtasks, move tasks into projects, or pull subtasks out
- **Notes** — add timestamped notes to any task, subtask, or flagged item
- **Archive** — completed tasks and closed projects collected in a single dropdown, newest first
- **Dark mode** — toggle in the header
- **Keyboard shortcuts** — `i` capture · `t` add task · `p` add project
- **Export / import** — back up and restore your data as JSON
- **Installable PWA** — add to home screen on iOS or Android; works fully offline

## Stack

| Concern | Approach |
|---|---|
| UI | String-rendered HTML, event delegation |
| State | `localStorage` |
| Offline | Service worker with stale-while-revalidate |
| Fonts | DM Sans + DM Mono via Google Fonts |
| Hosting | GitHub Pages |

## Local development

A PowerShell dev server is included:

```powershell
cd cockpit
powershell -ExecutionPolicy Bypass -File serve.ps1
# → http://localhost:8765
```

After editing `index.html`, clear the service worker cache in the browser console to see changes immediately:

```javascript
(async()=>{const k=await caches.keys();await Promise.all(k.map(c=>caches.delete(c)));const r=await navigator.serviceWorker.getRegistrations();await Promise.all(r.map(x=>x.unregister()));location.reload()})()
```

## Deployment

Only `index.html` needs to be updated for a new release. All other files (`manifest.json`, `sw.js`, icons) are static.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire app — HTML, CSS, and JS in one file |
| `manifest.json` | PWA manifest — tells browsers the app is installable |
| `sw.js` | Service worker — enables offline use and caching |
| `icon-192.png` | App icon |
| `serve.ps1` | Local dev server (not needed for deployment) |

## Version

`v0.1.0-beta.1`
