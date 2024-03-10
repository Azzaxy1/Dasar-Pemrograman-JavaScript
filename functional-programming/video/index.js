const person = { name: "Budi" };

const generatePersonWithAge = (age, person) => {
  // person.age = age;
  return { ...person, age };
};
console.log(person);
console.log(generatePersonWithAge(10, person));
