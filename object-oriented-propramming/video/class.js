//* Constructor
// class MyClass {
//   constructor(param1 = "Dicoding", param2 = "Indonesia") {
//     this.param1 = param1;
//     this.param2 = param2;
//   }
// }

// const MyClas = new MyClass(); // Instance/object
// console.log(MyClas.param1);
// console.log(MyClas.param2);

// console.log(MyClas);

//* Fields / variabel dalam class selain pakai properti
class MyClass {
  firstField = "First Field";
  secondField = "Second Field";

  // Private field tidak bisa diakses diluar class
  #privateFirstField = "Private First Field";
  #privateSecondField = "Private Second Field";

  // Cara mengakses private field menggunakan getter
  get getPrivateFirstField() {
    return this.#privateFirstField;
  }
}

const MyClas = new MyClass();
console.log(MyClas.firstField);
console.log(MyClas.secondField);
console.log(MyClas.getPrivateFirstField);
