async function sayJoke(apiUrl, jokeId) {
  apiUrl =
    "https://my-json-server.typicode.com/IbrahimBagalwa/test-json-placeholder/jokes";
  try {
    const endPoint = await fetch(apiUrl);
    if (!endPoint.ok) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }
    const response = await endPoint.json();
    const filtered = await response.find((item) => item.id == jokeId);
    if (!filtered) {
      throw new Error(`No jokes found id: ${jokeId}`);
    } else {
      return {
        saySetup: () => filtered.setup,
        sayPunchLine: () => filtered.punchLine,
      };
    }
  } catch (error) {
    console.log(error);
    throw error; 
  }
}

sayJoke("http://great.jokes/christmas", 101)
  .then((res) => {
    console.log(res.saySetup());
  })
  .catch((error) => {
    console.log(error);
  });
