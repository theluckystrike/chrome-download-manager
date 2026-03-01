/**
 * Download Manager — Enhanced chrome.downloads wrapper
 */
export interface DownloadOptions { url: string; filename?: string; saveAs?: boolean; conflictAction?: 'uniquify' | 'overwrite' | 'prompt'; onProgress?: (progress: number) => void; onComplete?: (id: number) => void; }

export class DownloadManager {
    /** Download a file */
    static async download(options: DownloadOptions): Promise<number> {
        const id = await chrome.downloads.download({ url: options.url, filename: options.filename, saveAs: options.saveAs, conflictAction: options.conflictAction || 'uniquify' });
        if (options.onProgress || options.onComplete) {
            chrome.downloads.onChanged.addListener(function listener(delta) {
                if (delta.id !== id) return;
                if (delta.state?.current === 'complete') { options.onComplete?.(id); chrome.downloads.onChanged.removeListener(listener); }
            });
        }
        return id;
    }

    /** Download text as file */
    static async downloadText(text: string, filename: string, mimeType: string = 'text/plain'): Promise<number> {
        const blob = new Blob([text], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const id = await this.download({ url, filename });
        URL.revokeObjectURL(url);
        return id;
    }

    /** Download JSON */
    static async downloadJSON(data: unknown, filename: string = 'data.json'): Promise<number> {
        return this.downloadText(JSON.stringify(data, null, 2), filename, 'application/json');
    }

    /** Pause a download */
    static async pause(id: number): Promise<void> { await chrome.downloads.pause(id); }

    /** Resume a download */
    static async resume(id: number): Promise<void> { await chrome.downloads.resume(id); }

    /** Cancel a download */
    static async cancel(id: number): Promise<void> { await chrome.downloads.cancel(id); }

    /** Get download by ID */
    static async get(id: number): Promise<chrome.downloads.DownloadItem | undefined> {
        const items = await chrome.downloads.search({ id });
        return items[0];
    }

    /** Get recent downloads */
    static async getRecent(limit: number = 20): Promise<chrome.downloads.DownloadItem[]> {
        return chrome.downloads.search({ limit, orderBy: ['-startTime'] });
    }

    /** Open downloaded file */
    static open(id: number): void { chrome.downloads.open(id); }

    /** Show in folder */
    static show(id: number): void { chrome.downloads.show(id); }
}
