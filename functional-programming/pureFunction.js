// * Sebelum pure function
// const createPersonWithAge = (age, person) => {
//   person.age = age;
//   return person;
// };

// const person = {
//   name: "Bobo",
// };

// const newPerson = createPersonWithAge(18, person);

// console.log({
//   person,
//   newPerson,
// });

/**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 }, // mengubah nilai dari objek lama
      newPerson: { name: 'Bobo', age: 18 }
    }
*/

//* Pure function dengan destructuring object
const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

const person = {
  name: "Bobo",
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson,
});
/**
 * Output:
 *  {
 *    person: { name: 'Bobo' }, // tidak mengubah nilai dari object lama
 *    newPerson: { name: 'Bobo', age: 18 }
 *  }
 */
