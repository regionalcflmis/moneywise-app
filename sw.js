const CACHE='moneywise-pwa-shell-v4.5.3';
const CORE=['./','./index.html','./404.html','./config.js','./manifest.webmanifest','./offline.html','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  const req=event.request;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(req,copy));return r}).catch(()=>caches.match(req).then(r=>r||caches.match('./index.html')).then(r=>r||caches.match('./offline.html'))));
    return;
  }
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(r=>{if(req.method==='GET'&&r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return r})));
});
