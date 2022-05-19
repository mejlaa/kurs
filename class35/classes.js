class Animal {
  constructor(name = "mee", age = 0) {
    this.name = name;
    this.age = age;
  }
  roar() {
    return " ";
  }
  eat() {
    return "give me food";
  }
}
class Wolf extends Animal {
  constructor(name, age, alpha = false) {
    super(name, age);
    this.alpha = alpha;
  }
  roar() {
    return "auuuu";
  }
  eat() {
    return "where is my meat";
  }
}

// const animalObj = new Animal("ire", 25);
// console.log(animalObj.eat());
const wolfObj = new Wolf("nidzo", 19, true);
console.log(wolfObj.roar());
console.log(wolfObj.eat());
console.log(wolfObj.eat());
console.log(wolfObj.eat());
console.log(wolfObj.eat());
