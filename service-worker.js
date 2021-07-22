// Nome do cache
const CACHE_NAME = 'my-pwa-cache-v1.0.0';

const urlsToCache = [
  "/",
]

// A primeira vez que o usuário inicia a PWA, 'install' é acionado.
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Abre um cache e armazena nossos arquivos em cache
        return cache.addAll(urlsToCache);
      })
  );
});

export const pwaTrackingListeners = () => {
  const fireAddToHomeScreenImpression = event => {
    fireTracking("Add to homescreen shown");
    //will not work for chrome, untill fixed
    event.userChoice.then(choiceResult => {
      fireTracking(`User clicked ${choiceResult}`);
    });
    //This is to prevent `beforeinstallprompt` event that triggers again on `Add` or `Cancel` click
    window.removeEventListener(
      "beforeinstallprompt",
      fireAddToHomeScreenImpression
    );
  };
  window.addEventListener("beforeinstallprompt", fireAddToHomeScreenImpression);
  
  //Track web app install by user
  window.addEventListener("appinstalled", event => {
    fireTracking("PWA app installed by user!!! Hurray");
  });

  //Track from where your web app has been opened/browsed
  window.addEventListener("load", () => {
    let trackText;
    if (navigator && navigator.standalone) {
      trackText = "Launched: Installed (iOS)";
    } else if (matchMedia("(display-mode: standalone)").matches) {
      trackText = "Launched: Installed";
    } else {
      trackText = "Launched: Browser Tab";
    }
    fireTracking(track);
  });
};

// Elimina caches antigos que não sejam os atuais.
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => {
        if (!cacheWhitelist.includes(key)) {
          return caches.delete(key);
        }
      }))
    )
  );
});

// Quando a página da Web vai buscar arquivos, nós interceptamos esse pedido e servimos os arquivos correspondentes
// se tivemos
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (event.request.cache === 'only-if-cache') {
        event.request.mode = 'same-origin'
      }
      return response || fetch(event.request);
    })
  );
});