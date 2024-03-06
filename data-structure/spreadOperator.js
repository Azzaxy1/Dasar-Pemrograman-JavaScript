//* Menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(favorites); // dengan arr
console.log(...favorites); // dengan spread operator
// sama seperti menuliskan kode console.log(favorites[0], favorites[1], favorites[2], favorites[3])

//* Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru
// Menggunakan array
const others = ["Cake", "Pie", "Donut"];

// const allFavorites = [favorites, others];

// console.log(allFavorites);

// Menggunakan spread operator
const allFavorites = [...favorites, ...others];

console.log(allFavorites);

/* Output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

//* Bisa juga menggabungkan object menggunakan object literal
const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/
