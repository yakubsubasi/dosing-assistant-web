'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f383ce4714c8d63d489a55709cfb8451",
"version.json": "49270d873d0a8d89ab2b95eaee6b33af",
"index.html": "de42778c29695a53099f38923d4897c2",
"/": "de42778c29695a53099f38923d4897c2",
"main.dart.js": "fcf28e37209ae219a0815b79ca28b12c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9959b923c75aece792bb1dcb97f65142",
".git/config": "91f34899f5d59906001b075b25a48822",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/6f/fc35e2458a510887c56ca669f16deb5cad1704": "144bae3416d71b6d216e00190af7664d",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/ad0ba4e90ed8c906d8b8380640a72ef77d2184": "e8f5e9ef06edd48e84f0a30cb1f26ce7",
".git/objects/3c/340310acd65c38e20e2ae08b6cc772e3236fed": "1af064399ccf8a56ed07436476701576",
".git/objects/56/25b6b1477dd4cf9719feb6750d87aab6d84107": "868772009bca0836c5ce365a4d329643",
".git/objects/5f/935726f6134fdfe07b0437a6297a332827d7bd": "87f7027a809ed4a2476726d293beefb6",
".git/objects/9c/4087d98842f25a41fda4ff6ed606691fd39394": "d7255890ecdc3441be5a424b3207bac5",
".git/objects/d9/df8e05f7c1da4d49261ff94684f684cb75671d": "37f9be81987048836825f8728167b9af",
".git/objects/bb/59e9665382832de66594fb5d373a31b3cf02f2": "b30405273c207f56430b08bf85a4c615",
".git/objects/d7/a38220ae69f1e5f3c6ce2bf89ec3ffd821756b": "c231da688213d743722fdefcd217c109",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/a6d1054c0a485c26fe582b02f9806932e1fe5e": "d7c06291105306a60909095a0c68b23d",
".git/objects/b3/ba2af5c42fe2a9befb38b6a8534253572e4b83": "fabf8a7b093aa4607f755bd973badc75",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/aeef2fe24d7ca6a7c3a693b7e51c575fb225ef": "78343a545a2fa83384a5f55e6e7e5926",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/0695fd04037f79cadb128107b77ffdb7e4f0de": "1ca41dfef76692cef0796cafade4973e",
".git/objects/f3/37109115cfb3960827369b3646e9e7be375842": "007b6b246fc09af7fa965ea2672cb303",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/917b1e61c62ea877e082d90c652b9b73a7f63e": "ef1c9fe8a1f0773b30b0b8421b7e90de",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ed/500227630020ff0278a42fa503dbde34cb9852": "1efb40ab6ae71b273cd552c8e66b79a6",
".git/objects/20/4d062122e6699f51fe37d8e6ffd982e29505fd": "7a32696f66b025529d485c72a50ead0c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/5c5fb81b81bba32993e4b23d23e0d76a162937": "af2a12e78437b6f4160dff8013d09049",
".git/objects/7d/3d61617c39675f8ebcbe89d70a56044c42f10b": "c7b9db62dde3c63d8ca3edea448c431c",
".git/objects/7c/7c2dce701cc3bd97a16ccd783182daf1087b61": "f2723538ce5f1a17e333c40734a37b7d",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/16/767756d699a2ac1265bc6643261a383cc4a4c9": "b234c967a8f2fcb911201a0684357cb8",
".git/objects/45/02ca59a16d6442d5ae67bc8d91c2e3c092d893": "e8c3d59b98920229fb42d514ba74b559",
".git/objects/73/7074b28d40be1f266bdd6ef73f26c1100ce7a8": "71c37c92345630246bacaac9fe0c9d68",
".git/objects/73/2a3cacdd007d59434959665d442f239bd49257": "95a103498bc5c928668fc0e270562310",
".git/objects/7b/059456189087d860dac38148c0bdcf58f91fe6": "4e45f57c5b3b9e334935882e2eeeb157",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/2395dfda592ebfee895492a874276ec889c851": "d8c10c70463b3891db03c027eb879ab1",
".git/objects/21/f04e2fc94c07324cf61f36c3c974d45fb9d10b": "8bbb4fc9385d529ae6358fce294600f6",
".git/objects/4d/832ece6583b524fbcb8315dc78ab358f5c074d": "d40c1b6f7c819ac827d8890084d3a61d",
".git/objects/75/2cc0015f8e9da0cbd5a4c6836916e2739c5f5b": "c535522634dc576f0d4a6fa72966ae48",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2f/512257058d800d34599287eccae7ce4725ae1f": "0199b54e6d25cbaf753605e1741d9876",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/32e1057a64764b2b1f0a475f991b4146768ed1": "d3fc6ad21614698c0770caeb5fe4d465",
".git/objects/9f/c7b11b4260559b5f1f6068405e8876f98e69e1": "1392491f98d5fc52445dc304d656afde",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/31/e764675296d6d7dfd19ac2b680ced3ae7661bf": "767554a6ee72872c233de8cd832044ad",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/a10f1f97133b311b6d426897b5774cbf49fe33": "ab69be9201b76c7711394388f394ba61",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/87acc75d13cb997326de2a8f310f0b183c6dc3": "2704c4693a9fbf91d26321af6f060e5e",
".git/objects/37/f2cd144b6139f88f4c2952275c630fb9b003fe": "c918597422af3852e637fd3f75afc25c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6c/5df122856772dfd8ae288bdea5d4569ee8ee42": "1ee88d112870b6f509a10bc649c2a226",
".git/objects/39/041d1312bc02cd09fbc778b00be54aad7b8cd3": "618454d0a9071cbe7b175ad96e5fb2c7",
".git/objects/55/0a6ace9a450dde51773ebe96ba05a463e8a2f0": "a6778a8e690be2c75e565f704af05fdf",
".git/objects/63/8b601e7af51ab6711e27aaf9aff5ee330aa1bd": "2d05f3844a2308759b2c73758f25c64a",
".git/objects/63/91997974f651e9800e4ae18cd6ffc60a6758c3": "65bd8dc9b783038a2b833435961c58ec",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/bbf257c8381c750983503a489584a27852ef20": "f0e4b3f0e4c62946dfa54912a2826a9f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/44619ef7a63e012b93fe3ff3ae8bc30e23645a": "62abd8f408b2ac67aa19ec1d4c204eb7",
".git/objects/a0/1c69e867311a715e251ed8d88b41fd4c2de28b": "b3784a972dfaad2e799162fd69c6c938",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d2/ff6526bf12923c077cd5a9aa7331bbfccee9b1": "56cc3ecc34e3491a678369ea5e2137d0",
".git/objects/d2/d9b9b7e9228326771bacba48d0dccbbe97e658": "012b2afb68d2ac5cbcad42f3814b4b86",
".git/objects/aa/2d2c5f64c5533a957709446c5fe537d48e80cf": "b37964365405eb95dd06f2470cf3bfd0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b0/cee759eb7f5c2d3a9b96aba17b5b7b3fecd9e6": "f1c7bda9c54174767433fb5cc400b9dc",
".git/objects/b0/5d58f830ce3bbcc32a0d2bdf3273ab536533d8": "498572126c8e027104848c6d31522511",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/9499451d740418f431949c44d275111357905f": "bfc7b9fae0d424af80a8fbb5f95071f6",
".git/objects/cd/bfe967d585e2a237ae7967dc58376f3a3e036e": "b8d7b7044ac2a072c4ef09e6a2106468",
".git/objects/e6/04f978d1f1016b81360aee4826ba46c711ed25": "87b8ec2d8ee77598ca672322ffaf6d76",
".git/objects/f0/f2401c45e829b1a66ebae205cbd46079a37746": "3dc99e12e65da78bf9eceb9c6fc66b7d",
".git/objects/c2/0e08fe87142640dc249bb60e04802c2bd7369b": "7333f1e252438d8dabe6c001ee830a4e",
".git/objects/e9/57d1b18e2e68c250d15faa351e2325be50c2bc": "f11ee221decd5904af9bbb2132d1bdbd",
".git/objects/e0/75e6d67fd710e9a93f96a480911f54a5cce004": "b3e1223beaabcb625f371434563f1d63",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/76/c3cd52f09aedf485f4871b4b02905a4f495c80": "b607fcec8dec4bd50cb5945824782202",
".git/objects/82/859b0461c3f78e34d663c47535fbd94086baf3": "51b40d6ad0b08c65406734789027bd7c",
".git/objects/49/94371ab980db35597f29328c2d984aca42995d": "1b8e3745213a51cdee969a7515aa24ad",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/6174e83e9e797783b26507e8f5348300e7e836": "ab145ccf7501ca9e1c62e01a44be7051",
".git/objects/14/5e147a35b1e50e47aa84584989e49d3136cf7e": "15c2a63956c2f2cd1ea7327693a8d8a7",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80296b726eceb14e3c3bc84936d40cee",
".git/logs/refs/heads/main": "0c3be985ffe5722ffd345474a3560d78",
".git/logs/refs/remotes/origin/master": "15bdd4018c24d5f6b649730a7da56add",
".git/logs/refs/remotes/origin/main": "b6b63216736c42e7184fd2523ef30440",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4d1207c5d64dca1b33ebddf6002817d5",
".git/refs/remotes/origin/master": "dbf2528d43e7f699f1516d413852cdf8",
".git/refs/remotes/origin/main": "4d1207c5d64dca1b33ebddf6002817d5",
".git/index": "48efe3d864bb2ace3515ab218a5b6134",
".git/COMMIT_EDITMSG": "6b03d2d83de6cf10064598b47606dfaf",
".git/FETCH_HEAD": "321e029c7dd49824aeb3edfe86b77701",
"assets/AssetManifest.json": "23ed62ce703d3ca2a9b37835371512ce",
"assets/NOTICES": "437fdf27ff89e00e1a05b8c6041d798a",
"assets/FontManifest.json": "c75353fbeebcd695f0652f190c83d46c",
"assets/AssetManifest.bin.json": "be89684de24632dbfc3150c7dbc8dd1c",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "af39579772d86f79d056e4cacdca9ebd",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "efe6bd69efd033af9161ae52d540a7de",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "3fcc569133fef05385aac13b534a1e9c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f474cb79b1fd7ae794dc089603d0ae33",
"assets/fonts/MaterialIcons-Regular.otf": "79e629fc65e5fe51d6450cb05b06522d",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
