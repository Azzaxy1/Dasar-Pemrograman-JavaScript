//* Menggunakan [] destructuring array bekerja berdasarkan posisi daripada penamaan propertinya
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);

//* Memilih array ditengah
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// const [, , thirdFood] = favorites;

// console.log(thirdFood);

// * Destructuring array
// let myFood = "Ice Cream";
// let herFood = "Noodles";

// [myFood, herFood] = favorites;

// console.log(myFood);
// console.log(herFood);

//* Default values
const favorites = ["Seafood"];

const [myFood, herFood = "Salad"] = favorites;

console.log(myFood);
console.log(herFood);
