// beberapa Higher-Order Function yang dimiliki array :
//* 1. arr.map() Looping pada array
const names = ["Azis", "Bagus", "Riyan"].map((name) => {
  return `${name}!`;
});

// console.log(names);

/* 
Output : [ 'Azis!', 'Bagus!', 'Riyan!' ]
*/

//* arr.filter()
const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const eligibleForScholarshipStudent = students.filter((student) => {
  return student.score > 80;
});

console.log(eligibleForScholarshipStudent);

//* arr.reduce()
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log("totalScore", totalScore);

//* arr.some
const arr = [1, 2, 3, 4, 5];
const even = arr.some((element) => element % 2 === 0);
console.log("even :", even);

//* arr.find()
const findJames = students.find((student) => student.name === "James");
console.log("findJames :", findJames);

//* arr.sort()
const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

//* arr.every()
const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every((score) => score >= minimumScore);
console.log(examPassed);

//* forEach()
names.forEach((name) => {
  console.log("Hello ", name);
});
