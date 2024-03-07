// using Destructuring object
const { coffeStock, isCoffeeMachineReady } = require("./export");

console.log("coffeStock", coffeStock);

const makeCoffee = (type, miligrams) => {
  if (coffeStock[type] >= miligrams) {
    console.log(`Kopi berhasil dibuat!`);
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffee("robusta", 80);
console.log("coffeStock", coffeStock);
console.log("isCoffeeMachineReady", isCoffeeMachineReady);
