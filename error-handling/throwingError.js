const json = '{ "name": "Yoda", "age": 20 }';

try {
  // konversi string to object JSON
  const user = JSON.parse(json);

  // Jika terjadi undefined agar memunculkan error
  if (!user.name) {
    throw new SyntaxError("'name' is required");
  }

  // menangani ini menggunakan percabangan untuk mengatur error
  errorCode;

  console.log("user", user.name);
  console.log("user", user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error(`JSON Error : ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.error(error.message);
  } else {
    console.error(error.stack);
  }
}
