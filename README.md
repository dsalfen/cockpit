# vp Vibepad

A simple, private task manager that runs entirely in your browser. Your data stays on your device — no accounts, no cloud, no sign-up.

**[→ Open Vibepad](https://dsalfen.github.io/vibepad)**

---

## Getting started

Just open the link above. That's it — Vibepad works immediately in any modern browser (Chrome, Safari, Edge, Firefox). There's nothing to install or configure.

### Install on your phone or tablet

Vibepad works as a standalone app on your home screen:

**iPhone / iPad:** Open the link in Safari → tap the Share button (square with arrow) → tap **Add to Home Screen**.

**Android:** Open the link in Chrome → tap the three-dot menu → tap **Add to Home Screen** (or **Install app** if prompted).

Once installed, it opens full-screen like a regular app and works offline.

### Install on your computer

In Chrome or Edge, open the link and look for the install icon (⊕) in the address bar, or go to the browser menu → **Install Vibepad**. It will open in its own window.

---

## How to use Vibepad

### Quick capture

The text box at the top is your inbox. Type a thought and press **Enter** — it drops into a list below the box. From there you can turn it into a task, file it into a project, or dismiss it. This is great for jotting things down fast without worrying about where they go yet.

**Keyboard shortcut:** Press **I** from anywhere in the app to jump straight to the capture box.

### Tasks

Tasks are standalone to-do items. To create one, tap **+ Task** at the bottom (or press **T**). Check the box to mark it complete.

Click on any task's name to **edit it** — just type your change and press Enter, or click away to save.

### Projects

Projects group related tasks together. Create one with **+ Project** (or press **P**), then add subtasks inside it using the **+ add subtask** link. When every subtask is done, a **✓ close** button appears to archive the whole project.

Click on any project or subtask name to rename it.

### Priority

Every task and subtask has a small dot on the right side. Click it to cycle through priority levels: **high** (amber) → **medium** (blue) → **low** (green) → none. Priority is visual — it helps you scan your list, but doesn't change sort order.

### Due dates

Click **due** next to any item to set a deadline. Overdue items turn red and automatically appear in the Flagged & Overdue zone at the top, so they're hard to miss.

### Flagging

Click the flag icon on any task or subtask to pin it to the **Flagged & Overdue** zone. This is your "needs attention now" view. You can complete items directly from this zone, add notes, or unflag them when they're no longer urgent.

Each flagged item shows an **aging badge** — a small tag showing how many days since the item was last touched (e.g., "<1d", "1d", "5d"). The badge color shifts from green (fresh, under 1 day) to amber (aging, 1–3 days) to red (stale, 3+ days). "Touching" means adding or editing a note, editing the item's title, or re-flagging it. If you unflag and re-flag an item, the aging clock resets completely — it gets a fresh start. Flagged items are sorted so the stalest items appear first, keeping the things that need the most attention at the top.

### Notes

Click the note icon (📄) on any item to expand its notes panel. Notes are timestamped and stack chronologically — useful for tracking status updates, decisions, or context over time. Click on any note's text to **edit it** — the timestamp will update to show when it was last changed.

### Reordering

Drag any task, project, or subtask to reorder it. You can also drag a standalone task onto a project to convert it into a subtask, or drag a subtask out of a project to make it standalone.

### Archive

Completed tasks and closed projects appear under the **closed & completed** toggle in the task list. You can reopen a closed project or un-check a completed task if you change your mind.

### Dark mode

Toggle dark mode with the sun/moon button in the top-right corner.

### Frameless window (desktop PWA only)

When installed as a desktop PWA in Chrome or Edge, Vibepad removes the browser's title bar and runs in a clean, frameless window. The close/minimize/maximize buttons still appear as a small overlay in the corner, but everything else is your content. You can move the window by dragging any empty background area (the space between and around the cards). This only applies when installed as an app — in a regular browser tab, everything looks normal.

---

## Your data

Vibepad stores everything in your browser's local storage. Nothing is sent to a server.

### Back up your data

Tap **export** at the bottom of the app to download a `.json` file with all your tasks, projects, and notes. Keep this somewhere safe.

### Restore from backup

Tap **import** and select a previously exported `.json` file. This replaces your current data with the file's contents.

### Sync to a file (desktop Chrome only)

On desktop Chrome, you can tap **sync to file** to link Vibepad to a `.json` file on your computer. Changes save to that file automatically. This is useful if you want to back up continuously or sync between browsers via a shared folder (like OneDrive or Dropbox).

### Important

Because your data lives in the browser, clearing your browser data or using a different browser means starting fresh. **Export regularly** if your tasks matter to you.

---

## Version

`v0.4.0`
