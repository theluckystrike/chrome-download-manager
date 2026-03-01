/**
 * Download Queue — Sequential download management
 */
import { DownloadManager, DownloadOptions } from './downloads';

export class DownloadQueue {
    private queue: DownloadOptions[] = [];
    private processing = false;
    private concurrent: number;
    private active = 0;

    constructor(concurrent: number = 3) { this.concurrent = concurrent; }

    enqueue(options: DownloadOptions): void { this.queue.push(options); this.process(); }
    enqueueAll(urls: string[]): void { urls.forEach((url) => this.enqueue({ url })); }
    get pending(): number { return this.queue.length; }
    clear(): void { this.queue = []; }

    private async process(): Promise<void> {
        while (this.queue.length > 0 && this.active < this.concurrent) {
            const next = this.queue.shift()!;
            this.active++;
            DownloadManager.download({ ...next, onComplete: () => { this.active--; this.process(); } });
        }
    }
}
