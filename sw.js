// MoneyWise v5.5.3
// This service worker intentionally does not cache the launcher.
// It also removes previous MoneyWise shell caches on activation.
self.addEventListener('install',event=>self.skipWaiting());
self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',()=>{});
