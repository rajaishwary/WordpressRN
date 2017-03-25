export function getFetch(url) {
  // console.log(url);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IiQyYSQwNSQvTnpJYzRVQVlXLnpNVFFDVEZjWVd1NTIuNEUvOXFNd0kzTmNpLmJQSDRmMTN0cVBVSlh6eSIsImZhY2Vib29rIjp7InBlcm1pc3Npb25zIjpbXX0sImdvb2dsZSI6eyJwZXJtaXNzaW9ucyI6W119LCJzbHVnIjoiY2hpdHRpLTIiLCJfX3YiOjAsInVzZXJSb2xlIjoicGxheWVyIiwibW9iaWxlTnVtYmVyIjoiODkzMDU0NDAzMyIsImVtYWlsIjoiYWdoc2hzMkBoamouY29tIiwibmFtZSI6ImNoaXR0aSIsInVwZGF0ZWRBdCI6IjIwMTYtMTItMTlUMTM6NDc6MzAuNTYzWiIsImNyZWF0ZWRBdCI6IjIwMTYtMTItMTlUMTM6NDc6MzAuNTI5WiIsIl9pZCI6IjU4NTdlNGYyNTQ0NDk4MTBjYTA0OGQzMiIsImlhdCI6MTQ4MjE1NTI2Mn0.hfqZjELmQh-M43HDn907v89yAnPGAvgccJpqrMtVGuM',
      },
    })
    .then(response => response.json())
    .then(response => {
      resolve(response);
    })
    .catch(error => {
      reject(error);
    });
  });
}

export function postFetch(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(response => response);
}

export function deleteFetch(url) {
  return fetch(url, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(response => response);
}
