function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

//* Rest parameter hanya berlaku diakhir parameter dan hasilnya berupa array
function myParamFunc(param1, param2, ...param3) {
  console.log("param1 : ", param1);
  console.log("param2 : ", param2);
  console.log("param 3 :", ...param3);
}

myParamFunc("parameter Pertama", "parameter Kedua", "azis", true, 3, 4);
