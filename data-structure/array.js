//* 1.  Membuat arr
const days = ["Senin", "Selasa", "Rabu", "Kamis"];

//* 2. Elemen arr diakses / diubah melalui key(Index)
days[0] = "Ahad";
// console.log(days);
days.push("Jumat");

//* 3. Array dapat memiliki tipe data yang berbeda
const arr = [1, "Azis", true];
// console.log(arr);

//* 4. Tipe data arr adalah object
console.log(typeof arr);
console.log(Array.isArray(arr)); // mengecek arr berupa arr

//* 5. Looping sepanjang elemen menggunakan for of, forEach, dll
for (let day of days) {
  console.log(day);
}

days.forEach((day) => {
  console.log(day);
});

//* Memiliki properti length yang menyimpan jumlah dari elemen
const arrLength = days.length;
// console.log(arrLength);
