//* Membuat set
const numberSet = new Set([1, 4, 6, 4, 1]);

//* 2. Menambah dan mengurangi set
numberSet.add(5);

numberSet.delete(1);

//* 3. Mengembalikan seluruh value dalam bentuk setIterator obj
console.log(numberSet.values());

//* 4. Mengecek ketersediaan nilai
console.log(numberSet.has(10));

//* 5. Mengecek nilai didalam set

console.log(numberSet.size);

//* 5.  Looping for of pada
for (let number of numberSet) {
  console.log(number);
}

//* Tipe data set adalah object
console.log(typeof numberSet);
