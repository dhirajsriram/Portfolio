"use strict";var precacheConfig=[["/index.html","aecab48bd5a0796dd25b7ecb925c8319"],["/static/css/main.f67d9816.css","51f39f387be896493e36cc7cfb08597e"],["/static/js/main.370b2521.js","58e3759ba786c2fcc5ae8a8ca736554e"],["/static/media/18700231_1523853040979325_4856863242513125567_n.2873a261.jpg","2873a261b91c84d259537c58cae6933d"],["/static/media/Solr.57393d0d.png","57393d0d6af4c76eef4f7e7ba2cb0d73"],["/static/media/bm_logo.8b2d0495.png","8b2d0495e124b941c4e4839ebfb71139"],["/static/media/business.d37f14cc.jpg","d37f14cc7e04e536937d0e84d2f2b11e"],["/static/media/clothes.7d96f256.jpg","7d96f2561c6d3940f8ecb1d05efc17c2"],["/static/media/construction.5ea98460.jpg","5ea9846004ab747a0d82a82ac7512eb9"],["/static/media/electronics.4d6dc88b.jpg","4d6dc88bdb4f55f38e1aad5ce1232af1"],["/static/media/images.5557cf8e.jpg","5557cf8e562da23cae9996939832d6a1"],["/static/media/logo-pickBoxx.1f9f858a.svg","1f9f858aa28c63fb7e245309aa84ed45"],["/static/media/pokemon.bbba30e0.jpg","bbba30e01a145a47c5e8987740e5870d"],["/static/media/remodeling.e428c987.jpg","e428c9872900a308866a0f9051246934"],["/static/media/search.490a6519.jpg","490a651949d86bbbd814e203300a2dfe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});