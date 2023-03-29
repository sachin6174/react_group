

fetch('https://api.codingninjas.com/api/v3/courses')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
console.log("sachin")



// fetch('https://api.codingninjas.com/api/v3/courses',function (response) {
//     response.json().then(data => {
//         fetch('https://api.codingninjas.com/api/v3/courses',function ( response) {
//             response.json().then(data => {
//                 fetch('https://api.codingninjas.com/api/v3/courses', function ( response) {
//                     response.json().then(data => {
//                          print("Do something with data1, data2, and data3")
                       
//                     });
//                 });
//             });
//         });
//     }); 
// } );









/**
 * 
 * here are several built-in methods and functions in JavaScript that work asynchronously. Here are some of the most common:

setTimeout(): Schedules a function to run after a specified delay.
setInterval(): Schedules a function to run every specified interval.
fetch(): Returns a Promise that resolves with the Response object representing the response to a request, typically to a server.
XMLHttpRequest(): Sends an HTTP request to the server, and returns the response as a string.
Promise(): Represents a value that may not be available yet but will be resolved eventually. This is useful for any asynchronous operation where you need to wait for a result.
async/await: Allows you to write asynchronous code that looks like synchronous code by using the async keyword on a function that returns a Promise, and await keyword when calling other async functions.
These are just a few examples of the many async methods and functions available in JavaScript.
 */