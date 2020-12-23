self.addEventListener('fetch', function(event) {
    console.log('fetch event in one-more-service-worker.js with url', event.request.url);
    if(event.request.url.match(/some\-script\.js/)) {
        event.respondWith(
            new Response(`console.log("some-script.js from cache");
this.postMessage("", "*");`, {
                headers: {'Content-Type': 'text/javascript'} 
            })
        );
    }
});
