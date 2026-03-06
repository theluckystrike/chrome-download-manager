# chrome-download-manager

[![npm version](https://img.shields.io/npm/v/chrome-download-manager)](https://npmjs.com/package/chrome-download-manager)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![CI Status](https://github.com/theluckystrike/chrome-download-manager/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/chrome-download-manager/actions)

A typed wrapper around the Chrome Downloads API for Manifest V3 extensions. Handles file downloads, pause/resume, text and JSON export, and concurrent download queuing.

INSTALLATION

```bash
npm install chrome-download-manager
```

USAGE

```typescript
import { DownloadManager, DownloadQueue } from 'chrome-download-manager';
```

Download a file from a URL.

```typescript
const id = await DownloadManager.download({
  url: 'https://example.com/file.zip',
  filename: 'file.zip',
  saveAs: true,
  conflictAction: 'uniquify',
  onComplete: (id) => console.log('Done', id)
});
```

Pause, resume, or cancel an active download.

```typescript
await DownloadManager.pause(id);
await DownloadManager.resume(id);
await DownloadManager.cancel(id);
```

Look up a download by ID or fetch recent downloads.

```typescript
const item = await DownloadManager.get(id);
const recent = await DownloadManager.getRecent(10);
```

Open a downloaded file or reveal it in the system file manager.

```typescript
DownloadManager.open(id);
DownloadManager.show(id);
```

Export text or JSON directly as a downloadable file.

```typescript
await DownloadManager.downloadText('hello world', 'note.txt', 'text/plain');
await DownloadManager.downloadJSON({ key: 'value' }, 'data.json');
```

Queue multiple downloads with a concurrency limit.

```typescript
const queue = new DownloadQueue(3);
queue.enqueue({ url: 'https://example.com/a.zip' });
queue.enqueueAll([
  'https://example.com/b.zip',
  'https://example.com/c.zip'
]);

console.log(queue.pending);
queue.clear();
```

API

DownloadManager (static methods)

- download(options) - Start a download. Returns the download ID.
- downloadText(text, filename, mimeType?) - Save a string as a file.
- downloadJSON(data, filename?) - Save a value as formatted JSON.
- pause(id) - Pause an active download.
- resume(id) - Resume a paused download.
- cancel(id) - Cancel a download.
- get(id) - Retrieve the DownloadItem for a given ID.
- getRecent(limit?) - Get recent downloads, newest first. Defaults to 20.
- open(id) - Open the downloaded file.
- show(id) - Show the file in the system file manager.

DownloadOptions

- url (string, required) - The URL to download.
- filename (string, optional) - Suggested filename.
- saveAs (boolean, optional) - Show the Save As dialog.
- conflictAction ('uniquify' | 'overwrite' | 'prompt', optional) - How to handle filename conflicts. Defaults to 'uniquify'.
- onProgress ((progress: number) => void, optional) - Progress callback.
- onComplete ((id: number) => void, optional) - Completion callback.

DownloadQueue

- constructor(concurrent?) - Create a queue. Default concurrency is 3.
- enqueue(options) - Add a download to the queue.
- enqueueAll(urls) - Add multiple URLs to the queue.
- pending (getter) - Number of queued downloads.
- clear() - Remove all pending downloads from the queue.

REQUIREMENTS

This library wraps `chrome.downloads` and must run inside a Chrome extension with the `downloads` permission declared in your manifest.json.

```json
{
  "permissions": ["downloads", "downloads.open"]
}
```

DEVELOPMENT

```bash
git clone https://github.com/theluckystrike/chrome-download-manager.git
cd chrome-download-manager
npm install
npm run build
npm test
```

CONTRIBUTING

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

LICENSE

MIT. See [LICENSE](LICENSE) for details.

Built by [theluckystrike](https://github.com/theluckystrike) | [zovo.one](https://zovo.one)
