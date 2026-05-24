const CACHE = 'habit-tracker-v1';
const FILES = [
  '/Life-Project/',
  '/Life-Project/index.html',
  '/Life-Project/manifest.json',
  '/Life-Project/icon-192.png',
  '/Life-Project/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
