var cacheurl = [
    "index.html",
    // "/pages/home/", 
    // "/pages/login/",
    // "/routes/",
    // "app.js"
];
self.addEventListener('install', event => {
        event.waitUntil(
            caches.open('MyCacheFile')
            .then(cache=>{
                return cache.addAll(cacheurl);
            })
        );
    }
    )

    self.addEventListener('fetch', event=>{
        event.respondWith(caches.match(event.request))
        .then(res => {
            if (res){
            return res;
            }
            return fetch(event.request); 
        })
    })
