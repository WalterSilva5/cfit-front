var CACHE_NAME = "carvalhos-fit-pwa-cache-v-0.0.1";
var urlsToCache = ["./"];
self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
      caches.open(CACHE_NAME)
          .then(function (cache) {
              return cache.addAll(urlsToCache);
          })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
      caches.match(event.request)
          .then(function (response) {
              // Cache hit - return response
              if (response) {
                  return response;
              }
              return fetch(event.request);
          }
          )
  );
});  

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(err => {
          console.error('ServiceWorker registration failed: ', err);
        });
    });
  }
}
export { registerServiceWorker };
