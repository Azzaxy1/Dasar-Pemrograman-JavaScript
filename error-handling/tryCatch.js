try {
  console.log("Awal block try");
  errorCode;
  console.log("Akhir block try");
} catch (error) {
  console.log("Jika terjadi eror");
  // properti dari parameter error
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

//* Finally akan tetap berjalan apapun hasil dari blok try catch
try {
  console.log("Awal block try");
  console.log("Akhir block try");
} catch (error) {
  console.log("Jika terjadi eror");
} finally {
  console.log("Akan tetap di eksekusi");
}
