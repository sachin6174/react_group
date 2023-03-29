fetch('https://api.example.com/data1', data1Callback);

function data1Callback(response) {
  response.json().then(data => {
    fetch('https://api.example.com/data2', data2Callback.bind(null, data));
  }).catch(error => console.error(error));
}

function data2Callback(data1, response) {
  response.json().then(data => {
    fetch('https://api.example.com/data3', data3Callback.bind(null, data1, data));
  }).catch(error => console.error(error));
}

function data3Callback(data1, data2, response) {
  response.json().then(data => {
    // Do something with data1, data2, and data3
  }).catch(error => console.error(error));
}