const CACHE_NAME = "pwa-app-cache-v1";

self.addEventListener('install', event => {
    event.waitUntil(async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(['/']);
    })
})