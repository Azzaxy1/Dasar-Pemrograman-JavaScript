//* Membuat custom error agar error yang terjadi menunjukkan kesalahan yang spesifik

// custom error dari turunan class error yang sudah ada
class ValidationError extends Error {
  constructor(message) {
    super(message);

    this.name = "ValidationError";
  }
}

const json = '{"age": 30 }';

try {
  // konversi string to object JSON
  const user = JSON.parse(json);

  // Jika terjadi undefined agar memunculkan error
  if (!user.name) {
    throw new ValidationError("'name' is required");
  }

  if (!user.age) {
    throw new ValidationError("'age' is required");
  }

  console.log("user", user.name);
  console.log("user", user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error(`JSON Syntax Error : ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.error(`Invalid data : ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.error(error.message);
  } else {
    console.error(error.stack);
  }
}
