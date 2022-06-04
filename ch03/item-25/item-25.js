"use strict";
/*
Item 25:
Use Async Functions Instead Of Callbacks
*/
const baseUrl = 'https://swapi.dev/api/people/';
const url1 = `${baseUrl}1/`;
const url2 = `${baseUrl}2/`;
const url3 = `${baseUrl}3/`;
// const page1Promise = fetch(url1);
// page1Promise
//   .then((response1) => fetch(url2))
//   .then((response2) => fetch(url3))
//   .catch((error) => {});
// page1Promise.then(async (res) => {
//   const data = await res.json();
//   console.log(data);
// });
// async function fetchPages() {
//   try {
//     const response1 = await fetch(url1);
//     const response2 = await fetch(url2);
//     const response3 = await fetch(url3);
//   } catch (error) {}
// }
async function fetchPages() {
    const [response1, response2, response3] = await Promise.all([
        fetch(url1),
        fetch(url2),
        fetch(url3),
    ]);
}
function timeout(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('timeout'), millis);
    });
}
function fetchWithTimeout(url, ms) {
    return Promise.race([fetch(url), timeout(ms)]);
}
// fetchWithTimeout(url1, 2000)
//   .then((res) => res.json())
//   .then((response) => console.log(response))
//   .catch((response) => console.log(response));
// async function getNumber() {
//   return 42;
// }
// const getNumber = async () => 42;
// const getNumber = () => Promise.resolve(42);
const _cache = {};
async function fetchWithCache(url) {
    if (url in _cache) {
        return _cache[url];
    }
    const response = await fetch(url);
    const text = await response.text();
    _cache[url] = text;
    return text;
}
let requestStatus;
async function getUser(userId) {
    requestStatus = 'loading';
    const profile = await fetchWithCache(`${baseUrl}${userId}`);
    requestStatus = 'success';
}
async function getJSON(url) {
    const response = await fetch(url);
    const jsonPromise = response.json();
    return jsonPromise;
}
