//* 1. Membuat Map
const stockFruits = new Map([
  ["Melon", 2],
  ["Anggur", 3],
]);

// console.log(stockFruits);
const incStock = stockFruits.set("Mangga", 5);
// console.log(incStock);

//* 2. Mengakses Map
const stockOfMelon = stockFruits.get("Melon");
// console.log(stockOfMelon);

//* 3. Mengembalikan seluruh key dalam MapIterator
console.log(stockFruits.keys());

//* 4. Mengembalikan seluruh value dalam MapIterator
console.log(stockFruits.values());

//* 5. Dapat melakukan perulangan dalam Map for of
for (let stockOfFruit of stockFruits) {
  console.log(stockOfFruit);
}

//* 6 Tipe data Map adalah object
console.log(typeof stockFruits);
