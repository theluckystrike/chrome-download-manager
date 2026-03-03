# chrome-download-manager

[![npm version](https://img.shields.io/npm/v/chrome-download-manager)](https://npmjs.com/package/chrome-download-manager)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Chrome Web Extension](https://img.shields.io/badge/Chrome-Web%20Extension-orange.svg)](https://developer.chrome.com/docs/extensions/)
[![CI Status](https://github.com/theluckystrike/chrome-download-manager/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/chrome-download-manager/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/chrome-download-manager?style=social)](https://github.com/theluckystrike/chrome-download-manager)

> Manage downloads in Chrome extensions.

**chrome-download-manager** provides download management utilities for Chrome extensions. Part of the Zovo Chrome extension utilities.

Part of the [Zovo](https://zovo.one) developer tools family.

## Features

- ✅ **File Downloads** - Download files from URLs
- ✅ **Progress Tracking** - Track download progress
- ✅ **Pause/Resume** - Pause and resume downloads
- ✅ **Queue Management** - Manage download queue
- ✅ **TypeScript Support** - Full type definitions included

## Installation

```bash
npm install chrome-download-manager
```

## Usage

```javascript
import { DownloadManager } from 'chrome-download-manager';

// Download a file
const id = await DownloadManager.download(url);

// Pause download
await DownloadManager.pause(id);

// Resume download
await DownloadManager.cancel(id);

// Get download info
const info = await DownloadManager.getInfo(id);
```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/download-feature`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/download-feature`
7. **Submit** a Pull Request

## See Also

### Related Zovo Repositories

- [chrome-screenshot-api](https://github.com/theluckystrike/chrome-screenshot-api) - Screenshot capture
- [chrome-page-snapshot](https://github.com/theluckystrike/chrome-page-snapshot) - Page snapshots

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions

Visit [zovo.one](https://zovo.one) for more information.

## License

MIT — [Zovo](https://zovo.one)
