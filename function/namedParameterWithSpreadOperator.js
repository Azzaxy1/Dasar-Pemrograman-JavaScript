// Menggunakan object literal
function myNamedParamFunc({ param1 = 1, param2 } = {}) {
  console.log(`param1 : ${param1}, param2 : ${param2}`);
}

myNamedParamFunc({
  param2: 2,
  param1: 5,
});
