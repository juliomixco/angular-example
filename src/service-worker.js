/**
 *
 * Add this file to angular.json
 * "assets": [... ,
              "src/service-worker.js"
            ],
 */
let counts = {
  install: 0,
  activate: 0,
  fetch: 0,
};
const CACHE_VERSION = 1;
const CACHE_PREFIX = `CS-v${CACHE_VERSION}`;
const FALLBACK_IMAGE_URL = '/assets/icon-72x72.png';
// const ASSET_MANIFEST_URL = '/manifest.json';
const fallbackImages = 'fallback-images';

const ALL_CACHES = {
  fallbackImages: cacheName('FALLBACK_IMAGES'),
  prefetch: cacheName('PREFETCH'),
  fallback: cacheName('FALLBACK'),
};

function cacheName(name) {
  return `${CACHE_PREFIX}-${name}`;
}

const PRECACHE_RESOURCES = [
  '/index.html',
  // '/assets/**',
  '/manifest.json',
  '/main.js',
  '/assets/icon-72x72.png',
];

// self.addEventListener('install', () => {
//   console.log('install: ', counts.install++);
// });
// self.addEventListener('activate', () => {
//   console.log('activate: ', counts.activate++);
// });
// self.addEventListener('fetch', () => {
//   console.log('fetch: ', counts.fetch++);
// });

// self.addEventListener('notificationclick', event => {
//   console.log('notification clicked!');
// });

var CACHE = 'offline-fallback';

// On install, cache the non available resource.
self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');
  // Ask the service worker to keep installing until the returning promise
  // resolves.
  evt.waitUntil(
    Promise.all([
      caches.open(fallbackImages).then(cache => {
        cache.add(FALLBACK_IMAGE_URL);
      }),
      precacheStaticAssets(),
      // precache(),
    ]).then(function() {
      // Skip waiting is necessary because we want the service worker to be active
      // and controlling the clients now, without waiting for them to be reloaded.
      return self.skipWaiting();
    }),
  );
});

self.addEventListener('activate', function(evt) {
  // `self.clients.claim()` allows the service worker to start intercepting
  // requests immediately. In addition to `self.skipWaiting()` it's needed to
  // allow serving fallbacks from the beginning.
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(fetchEvent) {
  console.log(fetchEvent);
  console.log('The service worker is serving the asset.');
  // Use any strategy you want. If it fails, use the fallback.
  // evt.respondWith(
  //   networkOrCache(evt.request).catch(function() {
  //     return useFallback();
  //   }),
  // );
  const acceptHeader = fetchEvent.request.headers.get('accept');
  const isFromApi = fetchEvent.request.url.indexOf('/api/') >= 0;
  if (fetchEvent.request.cache === 'only-if-cached' && fetchEvent.request.mode !== 'same-origin') {
    return;
  }
  fetchEvent.respondWith(
    caches
      .match(fetchEvent.request, { cacheName: ALL_CACHES.prefetch })
      .then(response => {
        if (isFromApi) {
          return fetchApiDataWithFallback(fetchEvent);
        }
        return fetch(fetchEvent.request);
      }),
  );
});
/**
 * @return { Promise<Response> }
 */

function fetchApiDataWithFallback(fetchEvent) {
  const acceptHeader = fetchEvent.request.headers.get('accept');

  const isImage = acceptHeader.indexOf('image/*') >= 0;
  return caches.open(ALL_CACHES.fallback).then(cache => {
    const fetchPromise = isImage
      ? fetchImageOrFallback(fetchEvent)
      : fetch(fetchEvent.request);

    return fetchPromise
      .then(response => {
        // clone response so we can send it to cache
        const clonedResponse = response.clone();
        cache.put(fetchEvent.request, clonedResponse);
        return response;
      })
      .catch(() => {
        return cache.match(fetchEvent.request);
      });
  });
}

function precacheStaticAssets() {
  return caches
    .open(ALL_CACHES.prefetch)
    .then(prefetchCache => {
      return prefetchCache.addAll(PRECACHE_RESOURCES);
    })
    .catch(err => {
      debugger;
      console.log(err);
    });
}

function fetchImageOrFallback(fetchEvent) {
  return fetch(fetchEvent.request, {
    mode: 'cors',
    credentials: 'omit',
  })
    .then(response => {
      if (!response.ok) {
        return caches.match(FALLBACK_IMAGE_URL, { cacheName: fallbackImages });
      } else {
        return response;
      }
    })
    .catch(() => {
      return caches.match(FALLBACK_IMAGE_URL, { cacheName: fallbackImages });
    });
}

// Open a cache and use `addAll()` with an array of assets to add all of them
// to the cache. Return a promise resolving when all the assets are added.
function precache() {
  return caches.open(CACHE).then(function(cache) {
    return cache.addAll(['/index.html', '/assets', '/manifest.json']);
  });
}

// This is a simplified version of network then cache without timeout to
// illustrate error control.
function networkOrCache(request) {
  return fetch(request)
    .then(function(response) {
      return response.ok ? response : fromCache(request);
    })
    .catch(function() {
      return fromCache(request);
    });
}

// The fallback is an embedded SVG image.
var FALLBACK =
  '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="180" stroke-linejoin="round">' +
  '  <path stroke="#DDD" stroke-width="25" d="M99,18 15,162H183z"/>' +
  '  <path stroke-width="17" fill="#FFF" d="M99,18 15,162H183z" stroke="#eee"/>' +
  '  <path d="M91,70a9,9 0 0,1 18,0l-5,50a4,4 0 0,1-8,0z" fill="#aaa"/>' +
  '  <circle cy="138" r="9" cx="100" fill="#aaa"/>' +
  '</svg>';

// This fallback never fails since it uses embedded fallbacks.
function useFallback() {
  return Promise.resolve(
    new Response(FALLBACK, {
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    }),
  );
}

// Open the cache where the assets were stored and search for the requested
// resource. Notice that in case of no matching, the promise still resolves
// but it does with `undefined` as value.
function fromCache(request) {
  return caches.open(CACHE).then(function(cache) {
    return cache.match(request).then(function(matching) {
      return matching || Promise.reject('request-not-in-cache');
    });
  });
}
