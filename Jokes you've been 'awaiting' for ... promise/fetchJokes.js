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
  }
}

sayJoke(
  "https://my-json-server.typicode.com/IbrahimBagalwa/test-json-placeholder/jokes",
  327
).then((res) => console.log(res))
