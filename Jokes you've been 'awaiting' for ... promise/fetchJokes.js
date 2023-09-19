async function sayJoke(apiUrl, jokeId) {
  try {
    const endPoint = await fetch(apiUrl);
    const response = await endPoint.json();
    const filtered = await response.filter((item) => item.id == jokeId);
    if(filtered.length == 0){
      throw new Error(`No jokes found id: ${jokeId}`);
    }else if(!response.ok){
      throw new Error(`No jokes at url: ${url}`);
    }
    return filtered;
  }catch{

  }
}

sayJoke(
  "https://my-json-server.typicode.com/IbrahimBagalwa/test-json-placeholder/jokes",
  144
).then((res) => console.log(res));
