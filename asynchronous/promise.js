function getUsers(isOffline) {
  // return a promise object
  return new Promise(function (resolve, reject) {
    // simulate network delay
    setTimeout(() => {
      const users = ["John", "Jack", "Abigail"];

      if (isOffline) {
        reject(new Error("cannot retrieve users due offline"), null);
        return;
      }

      resolve(users);
    }, 3000);
  });
}

getUsers(false)
  .then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.log(err.message);
  });
