self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    
    if (event.request.url.match('https://jsonplaceholder.typicode.com/todos/1')) {
      console.log('if you see this then everything is okay');

      event.respondWith(
        fetch(event.request).then(function(response) {
          if (!response.ok) {
            throw Error('response status ' + response.status);
          }
  
          // If we got back a non-error HTTP response, return it to the page.
          return response;
        }).catch(function(error) {
          console.warn('Constructing a fallback response, ' +
            'due to an error while fetching the real response:', error);
  
          var fallbackResponse = {
            items: [{
              snippet: {title: 'Fallback Title 1'}
            }, {
              snippet: {title: 'Fallback Title 2'}
            }, {
              snippet: {title: 'Fallback Title 3'}
            }]
          };
  
          return new Response(JSON.stringify(fallbackResponse), {
            headers: {'Content-Type': 'application/json'}
          });
        })
      );
    }
});
