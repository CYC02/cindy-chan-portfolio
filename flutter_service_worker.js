'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "29f8b7b30fb5217ad9ae7ea8d448fdaf",
".git/config": "759652137580a45ccde5dfb08b35f041",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "aafeaef56c0cce89e6d25429db7d4cf7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6bdcfade1d16a30c387f43933a3a2db3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1ed8fe5a9299968d36b30f76475bc423",
".git/logs/refs/heads/main": "d73a6aef638394a40813279a6cafc930",
".git/logs/refs/remotes/origin/main": "9882c0151cd203d8d06c98d391d0c4f0",
".git/objects/05/0e27db7119d0d55638e1b1732c398c183dc7ca": "8a5fa42a04e229499a5b5805071a546d",
".git/objects/07/a93005b32896dd3b78fd70902cd20ff8b6451f": "d56b799c2679f28ae8ac0f1f4eea1c6f",
".git/objects/07/d29e3603331ddb62b44c3c508f3cef9621af13": "410430947abba4cfccb8fa2aca55a868",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/11972c792382e6e2596e7bf7fbcc9b339eb26d": "91ec62a06f489cc8dd0a241678f9a8ee",
".git/objects/0f/e98861663130796be759d1d915ad39ef6b84d6": "6c7c20497cc008dc30796f2414edfd72",
".git/objects/19/3fd63edd875d34ce573cbbd13ce53d4cd48200": "8836936362bcc5ec715a32d26a751688",
".git/objects/1f/037ad98fcfe36f405de8c6d4de4d01241d6413": "3e28f8e3ae39a58d255a809250cf7aaa",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/aad08320bb0f38c62de86ec69f05ce1da46dbf": "bfe1e01e3fe140d23ee6340bb76bbf89",
".git/objects/24/b8521670b5971e8a22e825958fdfec19f787df": "c0ed6f62971e566a798b4a75f3940fa2",
".git/objects/25/4a5c8ed65bc912fdb12efe6d5ae353da7aa514": "70dda00844738e35018010a1f1436366",
".git/objects/25/6265aefecab8a57f5f6c10bb5564c9c7f90a39": "eee9876802806bd873c075cd43e1942d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/cb6dc761c8b2be262c65c8ad7f8affa9adcaba": "90256527a9807c3dc807d8c7e17c06f8",
".git/objects/2f/67a180e093e25063aa77c8340cb41dcb963354": "bca225f320b8e9aeaab7bbe7cd9f8061",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/36e69842356e6dc45659ccb484386e52bcf607": "cea02fc7c897e4c342d847af9450e41e",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/5abed595a57721449dd41b02678d5c41e3f490": "3b878945060a4d7220c1bb19b0bdbaf1",
".git/objects/4b/91bdfe0a80406ea4a26eb1e35cc7e21ec6d1bb": "f3db1db8d4b8fe70c6893ab63ee69682",
".git/objects/53/acd58386a9017287496779a7b155a12b7b2cc6": "4cebe4b4aac66295537161b817ee934e",
".git/objects/56/941a16ea66439adeeab621c679f8493d17b0c7": "dfacd46e3427556ee79869b9f59df18e",
".git/objects/58/3deca378736748f0f2c649d73bb0de116cffbf": "1b848644ecb83b6a9eda1826ef5d7e37",
".git/objects/5e/f96bc3f008f0e7f5a3cf2c8dcf9f023a97a8e8": "12017df206661bcaefc28805df8420af",
".git/objects/5f/5091be1ce818944e5ade5545c2e0f5fbc06699": "b20c4261e9e68b11e31331456e61430d",
".git/objects/5f/dd0d67cd0cfa1eb780fc026ae419d14be49d6b": "30dfa735713f7fe00ac741db567d0d82",
".git/objects/60/a4b0fab6d06c0423a2b5ef6e32d9269fffbc19": "4e541ed733d39fc27a2d5c2bdced7211",
".git/objects/63/d09b3bce177312b77aa000a2795e8e74ae8384": "182af38e926e0140c4504551a250079b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/a7f9a67688b68a90f353b8f0ba695973a726ad": "126cdb5552f86dec4c83c938f300ddec",
".git/objects/71/9dd4a0a8664697af0a51c8fbda675318cfc620": "4111e8aeca9a0cd3442e8435ad9e123f",
".git/objects/73/b64f2fe0c23f007fa42ed7bf93ddde0b0e68f0": "d145ac30ad550e0743507e9b150c167e",
".git/objects/76/9f38f2ad503f26012d37ec2d437dc3b4a02ef0": "35764aa58f8642be5b58ad5eb03ec61c",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/4b6506d07edc2d05b5f0d25fdb42129d3315df": "2ef2fb7c95dba4d01ef8b72dd0a138c1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a192f29cacf6c453e394b39d54c223ce2a6d28": "d6ec639ab6256a72e1e7e133b58a25f8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/b4e177fdd134e82949258427ac3fb95f7ef57d": "1c5ff28dc1aa53ae7826282b586d2d37",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/d445da265146751b1b0995f53d6617644070ac": "379db9feefc2e1e0d4db8c7bb1efa5d0",
".git/objects/94/5e5d30f18890bb40c982e3da0a3290bb7ab268": "2fa2c0984a2e02745f5c906aa39dd1be",
".git/objects/97/39678ecc0d4777e55ead4c7b54c5d945e4def8": "fa26caf44bf90b7cd6c83a0ac6bf7c69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/f4d0ffa95d31aaee0017f77732a9982ad03fd1": "00417eb38317fa41a2095c6389de03c5",
".git/objects/9e/e7e8097d31a24fe7164a481b773129783014e3": "372c87dbfee512f8f4ec1ee0f8f15c34",
".git/objects/a2/7a7fd9e272a05eafbcdd18a793751f42179e53": "40b9d08b4f493f0645aa39abd129a8db",
".git/objects/a4/042a495dae2640e93c155823fc08001e4503cc": "bb2597986135da757d66e59d2578331f",
".git/objects/a4/1a0c7d0f5557ec2882ad918e6f7251a33aa992": "9d49895ab835c1c627ec04c4d5eed1c2",
".git/objects/a8/82ccc68ff89fb9b436922da53d141651a11731": "e8a65cae5b5e43718071958986e24153",
".git/objects/ac/b1eff66950aa7a4aaa49654cac2b34ad3f3ed7": "c13c87c3e83111c4574f6afd0854cc87",
".git/objects/ac/d32e6c2fb78a4dd9a15f1a3c6fccbd1a245091": "d791614bdac285a4ee617abe109116a5",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/5231cb9c54febb0d9f1472432d536e812f99ac": "9f46cdbb298770933350c4c1c8899033",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/e3e7d33c3ca9e97ac79c02711cc6e65d153d30": "ff0de92308f2c81ac0f3476efb63cc9d",
".git/objects/c1/7d4497701a6f9925b7b13f25023784aa1f5f83": "887df2e4df90c5759a72d66f895baa9e",
".git/objects/c2/af3ab7b3a6dfceebe18040af140797029508f6": "2489334adf7f24ef12f072d0293da110",
".git/objects/c4/8f1fbfead9bee80fb5d1580a5fd3ffff2f0329": "71a110ef9dfcf265c3be9af990a87140",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/feb72e1809349787825b320bf97668b278c291": "7f808e3f74b9b40da002fa027af247fb",
".git/objects/d3/ab3390e1798e59c7e3d257afdd7254d29a8714": "a4febf5f8dad7b25fbe38fbe66524356",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/d74a5e75ef5807fb42ba633cb9518c3521c77c": "29544ec33d56a8df4877ef8074100a8a",
".git/objects/dd/3ee747458e9d589c53dda9801f7af85d798cd6": "fcb9175f785f71fc7b6a6c34b79c4c14",
".git/objects/dd/bce28e48da91a628cebb8377f999fb355125b0": "0b24118bbaa01fab6b9dfb4dd14a5dbd",
".git/objects/e1/7ef2eb8f0ec5b7c4700f95f657c30dbab1bf1a": "c29d2e14b439e2968db104d97cf163eb",
".git/objects/e4/b708c6f48c7905f5a0b01face98003295bb78e": "76f297d5707b4ee7d0ba09bc139919f8",
".git/objects/e5/4783bafb89dc4c94bb6e5b7e164b8a1eac3b40": "1c82f670a572951e7c488f8a46c9f218",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bf431492413989f8d1b7af4e61889d9c7b6b92": "394953573e605958382e34c325affbed",
".git/objects/ed/52cc3fe37bbd2fbf7c7ec74c988d518c5d182d": "71405bc3ed6156373aa6a2a82bbb95e9",
".git/objects/ee/272a1d00991a43f4f70946221b52ad57a76a1d": "d6d1d75dde05fa8e1d7694924c81a29b",
".git/objects/ee/bc770a8f2f8d0db3b51278bb3af9f4dd672074": "a2f8aa7aec593733fbc9741d00397b28",
".git/objects/ee/d6e2954d9bdce37b1e0a694614c2262e4047e5": "ed3d1f3b34a94b44697a99493ba0aa57",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/c98e920dfefe26484e0933f58d7f246af7bbd9": "d409d13a179a17af87b4ce73f8e65fa9",
".git/objects/f9/c7c5336a46605f22069dfa6e1cd077a52b1c78": "08a5fa8700a9120ca694cee84a6e6f87",
".git/objects/fb/68a03316328aba9811db2f46912ec0405b75eb": "7caf0f26fa63669ecddb68607955c382",
".git/ORIG_HEAD": "bf489eabed0f92e2884238036da96257",
".git/refs/heads/main": "8d80ef21ba7ae71f5fc6eb7d3666267d",
".git/refs/remotes/origin/main": "8d80ef21ba7ae71f5fc6eb7d3666267d",
"assets/AssetManifest.bin": "155ebec70ad369d68bf44ebf65b1afd1",
"assets/AssetManifest.bin.json": "156a26b5f72c16cad5c3638e1f362132",
"assets/AssetManifest.json": "a00b8134b2ab7b2618be095c5fbaa161",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/images/cplusplus_icon.png": "82d7c742de62c609cffb1cc91cc7ac44",
"assets/images/csharp_icon.png": "35de3b7e7d97b9514b0ea5de9a1c4a12",
"assets/images/flutter_icon.png": "20ed1ffaf6047de27f152124d114127c",
"assets/images/github_icon.png": "f12560820c5070ee4be83c3feb569ce1",
"assets/images/godot_icon.png": "e24bab97a12982f31802861c9a565154",
"assets/images/god_utopia_art/dove.png": "1b79b0a6698349304f4042b2decfe6e6",
"assets/images/god_utopia_art/everlasting.png": "1025114e57e14c49bdc0006d18ade13d",
"assets/images/god_utopia_art/frog.png": "0f34ccc3bed4ee61ba670f3c5074c680",
"assets/images/god_utopia_art/god_of_destruction.png": "528615760165d7f45d23ef92711d4b36",
"assets/images/god_utopia_art/god_of_equilibrium.png": "6f07aab53929ac4cc58287d60dff04ce",
"assets/images/god_utopia_art/god_of_eternity.png": "239cf83c1b00560961492d1f32373333",
"assets/images/god_utopia_art/god_of_greed.png": "0788f6e4ddc07019c458c25852a5a8fe",
"assets/images/god_utopia_art/immortal_jellyfish.png": "8c4de3a3aed4f2314d29a6272a98b740",
"assets/images/god_utopia_art/infinity_snake.png": "f262ec783e8c7200ea0ae2f9ea8c6e2e",
"assets/images/god_utopia_art/little_grey.png": "f60c76b8668c98b7d10abc53c370003f",
"assets/images/god_utopia_art/llama.png": "a74d3758d4009327408574faba3add76",
"assets/images/god_utopia_art/the_judgement.png": "9d21bc62e0540d402c799ef463359eb0",
"assets/images/god_utopia_art/tortoise_merchant.png": "272e43e7cfd676adec263a03ee4e90f3",
"assets/images/god_utopia_art/whale52.png": "d8a8b09bc934a0abbe7f29f4e1f1acbc",
"assets/images/highrise_havoc_screenshot.png": "33533d2dc0e5ffcf85fc3fbf43448522",
"assets/images/java_icon.png": "9fca5afeec7bb94c94f4226bcdbd6c70",
"assets/images/linkedin_icon.png": "f2e59841e34f7f733aed6fc030e60679",
"assets/images/lockdown_story_screenshot.png": "73f2e4ec51b0dba2a1dda012bb8933e2",
"assets/images/python_icon.png": "095ad5dc5a49034791996aea61e97c22",
"assets/images/unity_icon.png": "c31e07285df076254c55fff2057f492b",
"assets/images/vr_fps_shotgun_screenshot.png": "1fa1cd251b840c3aa6a1a94e36eb1ccb",
"assets/NOTICES": "67b8d8d955d8ce0c2da2644b104e64f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "6816e6880300ee0a2680786342ec57d9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3c2e34cc60acb766f3f5be65eeef746",
"/": "b3c2e34cc60acb766f3f5be65eeef746",
"main.dart.js": "e9309d10af4c8555ed9a11be88bae2b5",
"manifest.json": "de8b5cc751b447bdc74a36c116efe315",
"version.json": "4a64a5c1513780ac9830d3aa0f7c09b9"};
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
