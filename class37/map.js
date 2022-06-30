const array = [
  { id: 1, name: "suad", address: { street: "Hotkovo", number: 22 } },
  { id: 2, name: "irfan", address: { street: "banja", number: 24 } },
  { id: 3, name: "ramiz", address: { street: "bukres", number: 27 } },
  { id: 4, name: "ahmed", address: { street: "potok", number: 28 } },
  { id: 5, name: "samil", address: { street: "prvi maj", number: 29 } },
  { id: 6, name: "mejla", address: { street: "hercegovacka", number: 23 } },
  { id: 7, name: "ajsa", address: { street: "potok 2", number: 21 } },
];
//user predstavlja svaku vrednost iz niza
// const newArray = array.map((user, index) => {
//   return user.address;
// });

//nalazi iz niza objekat koji pocinje na slovo s i izbacuje taj objekat
// const newArray = array
//   .filter((user) => user.name[0] === "s")
//   .map((user) => user.name);

//value/element, index, array(this)
// Array.prototype.newMap = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];
//     const callbackResult = callback(element, i, this);
//     arr.push(callbackResult);
//   }
//   console.log(arr);

//   return arr;
// };

// [1, 2, 3].newMap((value) => value * 2);
// [3, "ss"].newMap((value) => undefined);

const newArray = array
  .filter((user) => user.address.number > 25)
  .map((user) => user.address);

//   previous-result
//   current-value
const newArray2 = array.reduce((result, value, index, array) => {
  if (value.address.number > 25) {
    result.push(value.address);
  }
  return result;
}, []);

Array.prototype.newReduce = function (callback, initialValue) {
  let result = initialValue ? initialValue : this[0];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (initialValue) {
      result = callback(initialValue, this[0], i, this);
      continue;
    }
    if (!initialValue && i === 0) {
      continue;
    }
    result = callback(this[0], this[(1, i, this)]);
  }
  return result;
};

const first = [1, 3, 5].newReduce((result, value) => result + value, 10);
console.log(first);
