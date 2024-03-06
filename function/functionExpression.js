//* Function expression
const greeting = function (name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
};

console.log(greeting("Ron", "English"));

/* output
Good Morning Ron!
 */

//* Menjadi input dari function lain dengan Callback
function displayResult(data) {
  console.log(data);
}

function sumTwoNumber(x, y, callback) {
  const result = x + y;
  callback(result);
}

sumTwoNumber(5, 5, displayResult);
