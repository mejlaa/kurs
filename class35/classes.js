// class Animal {
//   constructor(name = "mee", age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   roar() {
//     return " ";
//   }
//   eat() {
//     return "give me food";
//   }
// }
// class Wolf extends Animal {
//   constructor(name, age, alpha = false) {
//     super(name, age);
//     this.alpha = alpha;
//   }
//   roar() {
//     return "auuuu";
//   }
//   eat() {
//     return "where is my meat";
//   }
// }

// // const animalObj = new Animal("ire", 25);
// // console.log(animalObj.eat());
// const wolfObj = new Wolf("nidzo", 19, true);

// Wolf.prototype.newMethod = () => {
//   return "I was added later";
// };

// const wolf2 = new Wolf("milzas", 27, false);
// console.log(wolf2.newMethod(), wolfObj.newMethod());

// Array.prototype.newMethod = function () {
//   console.log(this);
// };
Array.prototype.newMethod = function () {
  this.forEach((value) => console.log(value));
};

const array = [1, 2, 3, 4, 5];
array.newMethod();
