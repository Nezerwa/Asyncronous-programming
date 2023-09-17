function fetchUserTodos() {
  const end1 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch(() => console.log("This is enable to reach the server"));
  });
}

fetchUserTodos();
