# chrome-download-manager — Downloads API Wrapper

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **Built by [Zovo](https://zovo.one)**

**Chrome Downloads API wrapper** — download files, text/JSON export, progress tracking, pause/resume, concurrent queue.

## 🚀 Quick Start
```typescript
import { DownloadManager, DownloadQueue } from 'chrome-download-manager';
await DownloadManager.downloadJSON({ users: [] }, 'backup.json');
const queue = new DownloadQueue(3);
queue.enqueueAll(['https://a.com/1.zip', 'https://a.com/2.zip']);
```

## 📄 License
MIT — [Zovo](https://zovo.one)
