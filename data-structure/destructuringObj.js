//* Menggunakan object literal ({}) disisi asignment operator
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// const { firstName, lastName, age } = profile;

// console.log(firstName, lastName, age);

/* output:
John Doe 18
*/

//* Destructuring Assignment
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// let firstName = "Dimas";
// let age = 20;

// // menginisialisasi nilai baru melalui destructuring object dan wajib menggunakan tanda kurung
// ({ firstName, age } = profile);

// console.log(firstName);
// console.log(age);

//* Default Values
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// const { firstName, age, isMale = false } = profile;

// console.log(firstName);
// console.log(age);
// console.log(isMale);

//* Menetapkan Nama Variabel Lokal yang Berbeda
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const {
  firstName: localFirstName,
  lastName: localLastName,
  age: localAge,
} = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
/* output:
John
Doe
18
*/
