/**
 * Polyfill for Fetch API using XMLHttpRequest
 */

//     window.fetch = function(url, options = {}) {
//         return new Promise(function(resolve, reject) {
//             const xhr = new XMLHttpRequest();

//             xhr.open('GET', url);

//             xhr.onload = function() {
//                 const response = {
//                     ok: xhr.status >= 200 && xhr.status < 300,
//                     status: xhr.status,
//                     statusText: xhr.statusText,
//                     url: xhr.responseURL,

//                     text: function() {
//                         return Promise.resolve(xhr.responseText);
//                     },

//                     json: function() {
//                         return new Promise(function(resolveJson, rejectJson) {
//                             try {
//                                 resolveJson(JSON.parse(xhr.responseText));
//                             } catch (e) {
//                                 rejectJson(e);
//                             }
//                         });
//                     }
//                 };
//                 resolve(response);
//             };

//             xhr.onerror = function() {
//                 reject(new TypeError('Network request failed'));
//             };

//             xhr.ontimeout = function() {
//                 reject(new TypeError('Network request timed out'));
//             };

//             xhr.send();
//         });
//     };
