"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/pokemon/index.html","90c1c306343d9aab29f1a0a8667e345b"],["/pokemon/static/css/main.cc54cdd9.css","a7f506dc677cb80dbaf38efa75ba68db"],["/pokemon/static/js/main.a1d98b21.js","667f0e4e00850b9e11a3723288ae481c"],["/pokemon/static/media/blastoise-mega.4ee0a393.gif","4ee0a3932eb0cfa8c4bd2c986f742568"],["/pokemon/static/media/blastoise-mega.6f5a27b6.gif","6f5a27b6986a0fd914902a785e1c72ab"],["/pokemon/static/media/blastoise.44de270d.gif","44de270dfe5f0974674613d26257ecee"],["/pokemon/static/media/blastoise.8f162ffe.gif","8f162ffef6b8e785f196bcca90a6fafe"],["/pokemon/static/media/bulbasaur.44144123.gif","441441232224ddc5f5147d4aee8661e4"],["/pokemon/static/media/bulbasaur.4f571379.gif","4f57137999b57ac4ec3c7288305cd6a5"],["/pokemon/static/media/charizard-megax.8cbbc59b.gif","8cbbc59b40238a1315a4fdb86bd66263"],["/pokemon/static/media/charizard-megax.a7692d1b.gif","a7692d1b6de89129731c05b6f19d3ad2"],["/pokemon/static/media/charizard-megay.4029151d.gif","4029151d6059b5d1037a4f46cef596ee"],["/pokemon/static/media/charizard-megay.f98bda35.gif","f98bda3527e5496335248f6b30b9cd84"],["/pokemon/static/media/charizard.49ab8af4.gif","49ab8af481e556d0557c9d2bd423efc0"],["/pokemon/static/media/charizard.bd40fb60.gif","bd40fb6080475351bbe7e3faf84fa2dc"],["/pokemon/static/media/charmander.af71045b.gif","af71045bdf83ba3b5d9979d5bef8145b"],["/pokemon/static/media/charmander.fbfa18a7.gif","fbfa18a75f6f39f8b1e4811ab490937d"],["/pokemon/static/media/charmeleon.3e206528.gif","3e206528652c77dabc18e39f7b93add4"],["/pokemon/static/media/charmeleon.c1d5c755.gif","c1d5c755313a28be5278adbbc83a18da"],["/pokemon/static/media/ivysaur.0064398a.gif","0064398a4f9fb91a1ffc6d6056fd52ee"],["/pokemon/static/media/ivysaur.157d35a5.gif","157d35a51a0cc8d53df845a1572622ea"],["/pokemon/static/media/scene.41cefcec.png","41cefcec8ad92ba7860b470390dd92e4"],["/pokemon/static/media/squirtle.28de617d.gif","28de617d7121661b71fe536396d567ab"],["/pokemon/static/media/squirtle.6f13ddbb.gif","6f13ddbbfffe2df287e99a240d180d54"],["/pokemon/static/media/venusaur-f.c480d8b2.gif","c480d8b2be49d203cf69dc33d9834c32"],["/pokemon/static/media/venusaur-f.e0746d90.gif","e0746d90d21d39fc4e1ee4db9bcdad4b"],["/pokemon/static/media/venusaur-mega.07fbcd72.gif","07fbcd72c4fb8cbbccdc6e44b943fd02"],["/pokemon/static/media/venusaur-mega.35f785f4.gif","35f785f4c8a9a9ae499471eaf16e4fe0"],["/pokemon/static/media/venusaur.babb2c8c.gif","babb2c8cc3c9d1e121322130cc79b445"],["/pokemon/static/media/venusaur.db6bea4f.gif","db6bea4f3ea106c99cb8ad5a2c3a26ea"],["/pokemon/static/media/wartortle.1ed27729.gif","1ed27729db006bf8ebccc78d09e32540"],["/pokemon/static/media/wartortle.cd794575.gif","cd794575924adbbcc2b0bb06efc7f213"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/pokemon/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});