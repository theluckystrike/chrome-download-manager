# chrome-download-manager

[![npm version](https://img.shields.io/npm/v/chrome-download-manager)](https://npmjs.com/package/chrome-download-manager)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)

A typed TypeScript wrapper around the Chrome Downloads API for Manifest V3 extensions. Provides file downloads with progress tracking, pause/resume control, text and JSON export, and concurrent download queue management.

## Installation

```bash
npm install chrome-download-manager
```

## Usage

Import the library in your Chrome extension:

```typescript
import { DownloadManager, DownloadQueue } from 'chrome-download-manager';
```

### Download a File

```typescript
const id = await DownloadManager.download({
  url: 'https://example.com/file.zip',
  filename: 'file.zip',
  saveAs: true,
  conflictAction: 'uniquify',
  onComplete: (id) => console.log('Download complete:', id)
});
```

### Download Text or JSON

Export data directly as downloadable files:

```typescript
// Download text as a file
await DownloadManager.downloadText('Hello, world!', 'hello.txt', 'text/plain');

// Download JSON data
await DownloadManager.downloadJSON({ name: 'example', version: '1.0.0' }, 'data.json');
```

### Control Downloads

Pause, resume, or cancel active downloads:

```typescript
await DownloadManager.pause(id);
await DownloadManager.resume(id);
await DownloadManager.cancel(id);
```

### Query Downloads

Retrieve download information by ID or fetch recent downloads:

```typescript
const item = await DownloadManager.get(id);
const recent = await DownloadManager.getRecent(10);
```

### Open or Show Files

```typescript
// Open the downloaded file in the default application
DownloadManager.open(id);

// Show the file in the system file manager
DownloadManager.show(id);
```

### Download Queue

Queue multiple downloads with configurable concurrency:

```typescript
const queue = new DownloadQueue(3); // Maximum 3 concurrent downloads

// Add single download
queue.enqueue({ url: 'https://example.com/a.zip' });

// Add multiple URLs
queue.enqueueAll([
  'https://example.com/b.zip',
  'https://example.com/c.zip',
  'https://example.com/d.zip'
]);

console.log(`Pending downloads: ${queue.pending}`);

// Clear all pending downloads
queue.clear();
```

## API Reference

### DownloadManager

Static methods for managing downloads:

| Method | Description |
|--------|-------------|
| `download(options)` | Start a download. Returns the download ID. |
| `downloadText(text, filename, mimeType?)` | Save a string as a file. |
| `downloadJSON(data, filename?)` | Save a value as formatted JSON. |
| `pause(id)` | Pause an active download. |
| `resume(id)` | Resume a paused download. |
| `cancel(id)` | Cancel a download. |
| `get(id)` | Retrieve the DownloadItem for a given ID. |
| `getRecent(limit?)` | Get recent downloads, newest first. Defaults to 20. |
| `open(id)` | Open the downloaded file in the default application. |
| `show(id)` | Show the file in the system file manager. |

### DownloadOptions

Options object for the `download()` method:

| Property | Type | Description |
|----------|------|-------------|
| `url` | `string` | The URL to download (required). |
| `filename` | `string` | Suggested filename for the download. |
| `saveAs` | `boolean` | Show the Save As dialog. |
| `conflictAction` | `'uniquify' \| 'overwrite' \| 'prompt'` | How to handle filename conflicts. Defaults to `'uniquify'`. |
| `onProgress` | `(progress: number) => void` | Progress callback (not currently fired by Chrome API). |
| `onComplete` | `(id: number) => void` | Called when the download completes. |

### DownloadQueue

Class for managing sequential downloads with concurrency control:

| Method/Property | Description |
|-----------------|-------------|
| `constructor(concurrent?)` | Create a queue. Default concurrency is 3. |
| `enqueue(options)` | Add a download to the queue. |
| `enqueueAll(urls)` | Add multiple URLs to the queue. |
| `pending` | Get the number of pending downloads (getter). |
| `clear()` | Remove all pending downloads from the queue. |

## Requirements

This library wraps the Chrome Downloads API and requires a Chrome extension with the appropriate permissions in your `manifest.json`:

```json
{
  "permissions": ["downloads", "downloads.open"]
}
```

For more information about building Chrome extensions, see the [Chrome Extension Guide](https://developer.chrome.com/docs/extensions/mv3/).

## Development

```bash
# Clone the repository
git clone https://github.com/theluckystrike/chrome-download-manager.git

# Install dependencies
npm install

# Build TypeScript
npm run build

# Run tests
npm test
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License. See [LICENSE](LICENSE) for details.

---

Built by [theluckystrike](https://github.com/theluckystrike) | [zovo.one](https://zovo.one)
