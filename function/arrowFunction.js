// 1.
const myArrowFunc = () => {
  return "Ini adalah arrow Function";
};

console.log(myArrowFunc());

// 2. Jika hanya 1 line
const sayName = (name) => console.log(`Nama saya ${name}`);
sayName("Leia");

//* 3. Default Parameter
const myArrFunc = (param1, param2 = 2) => {
  console.log("param1 ", param1);
  console.log("param2 ", param2);
};

myArrFunc(1, 5);
