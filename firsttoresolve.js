function getFastPosts() {
  const endPoint1 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => resolve(res));
    resolve("this enable to be reached");
  });
  const endPoint2 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => resolve(data))
      .catch(() => console.log("This is enable to be reached"));
    reject("this is enable to be reached");
  });
  return Promise.all([endPoint1, endPoint2]).then((value) => {
    console.log(value);
  });
}

getFastPosts();
