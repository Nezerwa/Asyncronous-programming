const newPromise = new Promise((resolve, reject) => {
  let a = 1 + 3;
  if (a === 2) {
    resolve("this is good answer");
  } else {
    reject("that is not correct");
  }
});

newPromise.then(
  (value) => {
    console.log(value);
  },
);
