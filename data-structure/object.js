//* 1. Membuat Object
const car = {
  brand: "honda",
  model: "sedan",
  color: "white",
};

// console.log(car);

//* 2. Nama properti yaitu string/tipe data lain yang nantinya akan diubah menjadi string
const car2 = {
  2: true,
  brand: "honda",
  model: "sedan",
  color: "white",
  "jumlah roda": 4,
};

// console.log(car2);

//* 3. Mengakses Obj
console.log(car.brand);
console.log(car2["jumlah roda"]); // mengakses jika properti/key terdapat spasi
console.log(car2["2"]); // mengakses jika properti/key terdapat selain string

//* 4. Menghapus properti object
delete car2.brand;
delete car2["jumlah roda"];
console.log(car2);

//* Didalam object bisa berupa tipe data apapun
