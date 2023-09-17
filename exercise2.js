const myFetch = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "json";
    request.onload = () => {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(`This Request is unable to be reached ${request.status}`);
      }
    };
    request.error = () => {
      reject("This has failed to load");
    };

    request.send();
  });
};

myFetch("https://dummyjson.com/products/1")
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));
