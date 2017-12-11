(function () {
    'use strict';
    //5) Listening for life cycle events
    //The service worker emits an install event at the end of registration.
    //We log a message, but this is a good place for caching static assets.
    self.addEventListener('install', function (event) {
        console.log('Service worker installing...');

        //8) It is possible for a new service worker to activate immediately, even if an existing service
        //worker is present, by skipping the waiting phase.
        //The install event listener is a common place to put the skipWaiting() call
        //but it can be called anywhere during or before the waiting phase.
        //self.skipWaiting();
    });
    //6) The service worker emits an activate event when it takes control of the page.
    //We log a message here, but this event is often used to update caches.
    //Only one service worker can be active at a time for a given scope
    //so a newly installed service worker isn't activated until the existing service
    //worker is no longer in use.
    //This is why all pages controlled by a service worker must be closed before a
    //new service worker can take over.
    self.addEventListener('activate', function (event) {
        console.log('Service worker activating...');
    });

    //7))Re-register the existing service worker
    //Reload the page. Notice how the events change.
    //Now close and reopen the page (remember to close all pages associated with the service
    //worker). Observe the logged events.
    //After initial installation and activation, re-registering an existing worker does not re-install or
    //re-activate the service worker. Service workers also persist across browsing sessions.


    // I'm a new service worker

    //9) Intercept network requests
    //Service Workers can act as a proxy between your web app and the network.
    //The service worker receives a fetch event for every HTTP request made by the browser.
    //fetch event object contains the request;
    //Listening for fetch events in the service worker is similar to listening to click events
    //in the DOM.
    //when a fetch event occurs, we log the requested URL to the console.

    self.addEventListener('fetch', function (event) {
        console.log('Fetching:', event.request.url);
    });

})();
