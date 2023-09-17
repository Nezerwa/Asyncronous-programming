// Create a function called myFetch that
//  should work as a simple version of the native fetch() API. The function myFetch should use the XMLHttpRequest
//  to make a GET Request and return a promise that resolves with the
//  request’s response and rejects with an error if any.
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
