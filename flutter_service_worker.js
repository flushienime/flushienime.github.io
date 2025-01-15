'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3479bae05dc9f9b73b17ff5073b350da",
"assets/AssetManifest.bin.json": "0f545ee4994be32fcc6762fa4e8ac784",
"assets/AssetManifest.json": "fd04c92c41328ebeaa72bfb52a91135a",
"assets/assets/audio/Goi_dau.mp3": "96ab9133aa1a3cf7eacdff569f3f07b1",
"assets/assets/audio/Goi_dau_2.mp3": "5a985f3f6e7573929a0a70fb439741e0",
"assets/assets/audio/Goi_dau_3.mp3": "96e7ca0233dc4797313b1ad2fe7b413d",
"assets/assets/audio/Goi_dau_4.mp3": "2fa17a67243d1a75f6baadd01f15c8d4",
"assets/assets/audio/Goi_dau_5.mp3": "0ef4727b430085b2bb26c7c6eb00f8f5",
"assets/assets/audio/Goi_dau_6.mp3": "52b2291caf6ae4e991c253892c33a283",
"assets/assets/audio/Goi_dau_7.m4a": "aa4c634c964f43305275fe737304c52e",
"assets/assets/audio/Goi_dau_8.m4a": "9d8c49711873c405f8b33af12f377048",
"assets/assets/audio/Goi_dau_9.m4a": "489f296553be7500fa41cacc8609c652",
"assets/assets/audio/Ko_goi_dau.mp3": "5b5ee33848b5bbcf9721d106d8896a4f",
"assets/assets/audio/Ko_goi_dau_2.mp3": "39880b4936ef087415925cea571b4dc2",
"assets/assets/audio/Ko_goi_dau_3.mp3": "de114b73f05eb294cb5fc3205c31bd64",
"assets/assets/audio/Ko_goi_dau_4.mp3": "d71b4f6454d972425a8a0e7240e1682c",
"assets/assets/audio/Ko_goi_dau_5.mp3": "fe794391d1bbbc43c82538c9fddc9e2f",
"assets/assets/audio/Ko_goi_dau_6.m4a": "96cef4fa3550053fd7b611637d8eaa8b",
"assets/assets/audio/Ko_goi_dau_7.m4a": "55996243128b4f3d363a1c65af504e14",
"assets/assets/audio/Ko_goi_dau_8.m4a": "1b7aa6c70e99166e37d0175f081fa3f4",
"assets/assets/audio/Ko_goi_dau_9.m4a": "e68460d7d9ec89d32f653b027214e1c0",
"assets/assets/image/MTea_image.jpg": "6921f49fac40f12e0973dd5aa96de3e4",
"assets/assets/image/MTea_image10.jpg": "7b616a470da7697a0c73c7fd59277a6a",
"assets/assets/image/MTea_image11.jpg": "7521003a98094bfa3d5b750159d1f1c7",
"assets/assets/image/MTea_image12.jpg": "f671d1a0d0c23ef1edf2f768cd239bf5",
"assets/assets/image/MTea_image13.jpg": "98ed7d829d060435c07ad6279855c59a",
"assets/assets/image/MTea_image14.jpg": "3986596f5971bff656563e5bae5ff669",
"assets/assets/image/MTea_image15.jpg": "56012cd5665b324b594ff92189f7997d",
"assets/assets/image/MTea_image16.jpg": "f785e824008ecce3e6beaf850839047d",
"assets/assets/image/MTea_image17.jpg": "f1cd096c275fab939642cac2b23ef508",
"assets/assets/image/MTea_image18.jpg": "b1572e847aa728bc16fecdce3748789e",
"assets/assets/image/MTea_image19.jpg": "60eab0a37197f370c4cfd7b8f005c607",
"assets/assets/image/MTea_image2.jpg": "f14484715988520085a682994af5ae22",
"assets/assets/image/MTea_image20.jpg": "cf3540e17dd6fc3ca5a3639e60bda57b",
"assets/assets/image/MTea_image3.jpg": "721a86efa6e2721ae1ffef04f0ca8db8",
"assets/assets/image/MTea_image4.jpg": "fac91f2543d290cc365d58dc2385b634",
"assets/assets/image/MTea_image5.jpg": "6921f49fac40f12e0973dd5aa96de3e4",
"assets/assets/image/MTea_image6.jpg": "308272e6c4820fd51d3e202f7d2478fa",
"assets/assets/image/MTea_image7.jpg": "4283ab67d4b680e60de58bae39f109e8",
"assets/assets/image/MTea_image8.jpg": "66d816221e8e4e5df4c5ff5ff79bdc11",
"assets/assets/image/MTea_image9.jpg": "73974cac5c0b5e9aa84e9cdcbfdd5065",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "74c441fec60f5a451eceecc4b1cde3ff",
"assets/NOTICES": "dcaa60336d23f59f4fcd26466f303d28",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "c2d27f73f828199b0a4c3fc2468c58d1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "13034222cd217e38e2e28582ed9e3aab",
"/": "13034222cd217e38e2e28582ed9e3aab",
"main.dart.js": "a40ff66b097b4ddbb1517f1b7be3c754",
"manifest.json": "72e1c0918265371eceb0115e19d8875b",
"version.json": "a017b68b91250e13849cdec169b3879d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
