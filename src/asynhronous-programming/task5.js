const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
];

const requests = urls.map(url => fetch(url));

function parallelLoading(array) {
  return Promise.all(array)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => console.log( data));
}

parallelLoading(requests);

function getArraySequentially(array) {
  const arrSequentially = [];

  const prom = array.reduce(
    (promise, currentUrl) =>
      promise
        .then(() => fetch(currentUrl))
        .then(res => res.json())
        .then(json => arrSequentially.push(json)),
    Promise.resolve()
  );

  return prom.then(() => arrSequentially);
}
getArraySequentially(urls).then(data => console.log('getArraySequentially', data));