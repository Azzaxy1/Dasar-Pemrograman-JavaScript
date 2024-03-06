//* 1. Memeriksa apakah bernilai terbatas/ tak terbatas
const apakahTakTerbatas = isFinite(5 / 0);
console.log(apakahTakTerbatas);

//* 2. memeriksa apakah suatu nilai bernilai NaN atau bukan
const apakahNan = isNaN("sepuluh" / 5);
console.log(apakahNan);

//* 3. Konversi dari suatu nilai ke nilai desimal
const desimal = parseFloat("1.23");
console.log(desimal);

//* 4. Konversi dari suatu nilai ke bilangan bulat
const integer = parseInt(1.45);
console.log(integer);
