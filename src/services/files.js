import 'whatwg-fetch';

export function fetchFiles(page) {
  const limit = 10;
  return fetch(`http://localhost:3003/files?_start=${page*limit}&_limit=${limit}`)
    .then(function(response) {
      return response.json();
    });
}
