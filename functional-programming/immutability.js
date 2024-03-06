//*  Sebuah objek tidak boleh diubah setelah objek tersebut dibuat.
// no immbutability
// const user = {
//   firstname: "Harry",
//   lastName: "Protter", // ups, typo!
// };

// const renameLastNameUser = (newLastName, user) => {
//   user.lastName = newLastName;
// };

// const newName = renameLastNameUser("Potter", user);

// console.log(newName);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 *
 */

//! Imutability
const user = {
  firsName: "Harry",
  lastName: "Protter", // typo
};

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};

const newUser = createUserWithNewLastName("Potter", user);

console.log("newUser", newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 *
 */
