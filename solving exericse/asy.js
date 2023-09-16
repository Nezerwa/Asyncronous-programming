function sayHello() {
  setTimeout(() => {
    console.log("Hello");
  }, 1000);
}

sayHello(); // should log "Hello" after 1000ms

// Challenge 2
var promise = new Promise(function (resolve, reject) {
  resolve("resolved");
});

promise.then((response)=>{
    setTimeout(()=>{
        console.log(response);
    }, 1000)
})


// Should print out "Resolved!"
// ADD CODE HERE

// Challenge 3

promise = new Promise(function (resolve, reject) {
  reject("Rejected!");
})
promise.catch((error)=> console.log(error))
