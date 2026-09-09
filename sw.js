// MoneyWise PWA v5.7.4 - cache reset
self.addEventListener('install',event=>self.skipWaiting());
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>caches.delete(k)))).then(()=>self.registration.unregister()));
});
self.addEventListener('fetch',()=>{});
