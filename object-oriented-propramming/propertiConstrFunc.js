// class Car {
//   constructor(brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
//   }
// }

// const car1 = new Car("BMW", "Silver", 200);
// const car2 = new Car("Audi", "blue", 220);
// const car3 = new Car("BMW", "black", 250);

// console.log(car1);
// console.log(car2);
// console.log(car3);

//* Properti getter dan setter
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("John", "Doe");
console.log(user);
console.log(user.fullName);

user.fullName = "Fulan Fulanah";
console.log(user);
console.log(user.fullName);

/* Output:
User { firstName: 'John', lastName: 'Doe' }
John Doe
User { firstName: 'Fulan', lastName: 'Fulanah' }
Fulan Fulanah
*/

//* Jika terdapat properti yang tidak ingin diganti bisa menggunakan method getter dan setter
class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }
}

const car = new Car("BMW", "red", 200);
console.log(car.chassisNumber);
car.chassisNumber = "BMW-1";
console.log(car.chassisNumber);
/* Output:
BMW-232
you are not allowed to change the chassis number
BMW-232
*/
