function getUsers(err, callback) {
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];

    if (err) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

const usersCallback = (err, users) => {
  if (err) {
    console.log("proccess failed: ", err.message);
    return;
  }
  console.log("Process sucess", users);
};

getUsers(false, usersCallback);
getUsers(true, usersCallback);
