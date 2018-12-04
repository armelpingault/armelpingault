self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('ap').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/assets/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0',
        '/assets/font-awesome-4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0',
        '/assets/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0',
        '/assets/images/icons/favicon-16x16.png',
        '/assets/images/icons/favicon-32x32.png',
        '/assets/images/asiainspection-550x315.jpg',
        '/assets/images/lingolistic-app-550x315.jpg',
        '/assets/images/lingolistic-com-550x315.jpg',
        '/assets/images/chinesepod-550x315.jpg',
        '/assets/images/tennis-de-table-550x315.jpg',
        '/assets/images/diceroller-550x315.jpg',
        '/assets/scripts/lazyload.min.js',
        '/assets/scripts/main.js',
      ]);
    })
  );
});

 self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});