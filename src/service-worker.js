/* eslint-disable no-restricted-globals */
self.addEventListener('install', event => {
    console.log('Service worker installed');
    event.waitUntil(
      caches.open('static-cache').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './manifest.json',
          './favicon.ico'
        ]);
      })
    );
  });
  
  self.addEventListener('activate', event => {
    console.log('Service worker activated');
  });
  
  self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  