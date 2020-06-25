const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  '/pages/index.html',
  '/pages/about.html',
  '/pages/AI.html',
  '/pages/bigdata.html',
  '/pages/datamining.html',
  '/pages/datascience.html',
  '/pages/deeplearning.html',
  '/pages/devops.html',
  '/pages/excel.html',
  '/pages/git.html',
  '/pages/interview.html',
  '/pages/linux.html',
  '/pages/ml.html',
  '/pages/nlp.html',
  '/pages/numpy.html',
  '/pages/pandas.html',
  '/pages/python.html',
  '/pages/rcheetsheet.html',
  '/pages/sidebar.html',

  '/js/sidebar.js',
  '/js/jquery-3.2.1.min.js',

  '/img/icon1.png',
  '/img/icon2.png',
  '/img/sample.jpg',
  '/img/team1.jpg',
  '/img/team3.jpg',
  '/img/team22.jpg',
  '/img/team_background.jpg',

  '/css/about_style.css',
  '/css/index_style.css',
  '/css/bootstrap4/bootstrap.min.css',
  '/css/bootstrap4/bootstrap.min.js',
  '/css/bootstrap4/popper.js',

  '/.vscode/setting.json',
  
  'https://fonts.googleapis.com/css?family=Lato:300,400,700',
];
// install event
self.addEventListener('install', evt => {
  console.log("install");
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
const dynamicCacheName = 'site-dynamic-v1';
// activate event
self.addEventListener('activate', evt => {
  console.log("acti");
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key =>  key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    })
  );
});