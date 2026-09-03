const CACHE='moneywise-pwa-shell-v4.7.0-r1';';
const CORE=['./','./index.html','./404.html','./config.js?v=4701','./manifest.webmanifest?v=4701','./offline.html','./icon-192.png?v=4701','./icon-512.png?v=4701','./apple-touch-icon.png?v=4701'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return;
  event.respondWith(fetch(req).then(r=>{
    if(r&&r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(req,copy));}
    return r;
  }).catch(()=>caches.match(req).then(r=>r||(req.mode==='navigate'?caches.match('./index.html'):null)).then(r=>r||caches.match('./offline.html'))));
});
