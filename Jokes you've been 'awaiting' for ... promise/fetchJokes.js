async function sayJoke(apiUrl, jokeId) {
  try {
    const endPoint = await fetch(apiUrl);
    if (!endPoint.ok) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }
    const response = await endPoint.json();
    const filtered = await response.filter((item) => item.id == jokeId);
    if (filtered.length == 0) {
      throw new Error(`No jokes found id: ${jokeId}`);
    } else {
      return filtered;
    }
  } catch (error) {
    console.log(error);
    throw error; // Propagate the error to be caught in the calling function
  }
}

sayJoke(
  "https://my-json-server.typicode.com/IbrahimBagalwa/test-json-placeholder/jokes",
  101
)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    // Catch any errors that occur during the fetch operation or in the `then` block
    console.log(error);
  });
