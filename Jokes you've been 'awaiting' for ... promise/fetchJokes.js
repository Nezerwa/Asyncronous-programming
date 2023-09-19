async function sayJoke(apiUrl, jokeId) {
  const endPoint = await fetch(apiUrl);
  const response = await endPoint.json();
  return response;
}

sayJoke(
  "https://my-json-server.typicode.com/IbrahimBagalwa/test-json-placeholder/jokes"
)
  .then((value) => console.log(value))
  .catch("you have an error");
