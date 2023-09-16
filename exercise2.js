function myFetch(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        resolve(request.response);
      } else {
        reject(`this response has been rejected with ${request.status}`);
      }
    };
    request.onerror = () => {
      reject("this request has been rejected");
    };
    request.send();
  });
}
myFetch("https://my-random-api.com/data")
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));
