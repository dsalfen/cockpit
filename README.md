# Cockpit

Minimal task management for focused work. Designed to be ADD-friendly — low friction, high visibility.

## Features

- **Flagged for Follow-up** — flag any task or subtask to keep it visible; add timestamped notes without closing it
- **Projects with subtasks** — break work into steps; progress tracked automatically
- **Notes on everything** — timestamped audit trail on any task, flagged or not
- **Dark mode** — toggle with one click; preference persists
- **Offline-capable** — works without internet after first load
- **Data stays local** — everything in your browser's localStorage; export/import JSON backups

## Install as an App

### From GitHub Pages (recommended)

1. Visit your deployed URL: `https://YOUR_USERNAME.github.io/cockpit/`
2. In **Edge**: click the install icon in the address bar (monitor with down arrow), or go to `⋯` menu → Apps → Install this site as an app
3. In **Chrome**: click the install icon in the address bar, or go to `⋮` menu → Save and share → Install page as app

This gives you a standalone window, a taskbar/dock icon, and offline support.

### From a local file

If running from a local `file://` path, Edge/Chrome won't offer the install prompt. Use:
- Edge: `⋯` → More tools → Pin to taskbar
- Or: `⋯` → More tools → Create shortcut → check "Open as window"

## Deploy to GitHub Pages

1. **Create a new repository** on github.com (e.g., `cockpit`)
2. **Upload these files** to the repo root:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. **Enable GitHub Pages**: go to repo Settings → Pages → Source: "Deploy from a branch" → Branch: `main` → Folder: `/ (root)` → Save
4. Wait 1-2 minutes, then visit `https://YOUR_USERNAME.github.io/cockpit/`

That's it. No build step, no dependencies, no server.

## Data

All task data lives in `localStorage` in your browser. It survives browser restarts and system reboots. It does **not** sync across devices or browsers.

- **Export**: click "export" at the bottom of the app to download a JSON backup
- **Import**: click "import" to restore from a backup file
- **Risk**: clearing browser data or cookies will erase your tasks — keep backups

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire app — HTML, CSS, and JS in one file |
| `manifest.json` | PWA manifest — tells browsers the app is installable |
| `sw.js` | Service worker — enables offline use and caching |
| `icon-192.png` | App icon (192×192) |
| `icon-512.png` | App icon (512×512) |
