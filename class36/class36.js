// removeFirst = (array) => {
//   const arr1 = [...array];
//   arr1.shift();
//   return arr1;
// };

// const arr = [1, 2, 3, 4];

// console.log(removeFirst(arr));
// console.log(arr);

const users = [
  { id: 1, name: "irfan", age: 25 },
  { id: 2, name: "nikola", age: 19 },
  { id: 3, name: "hamza", age: 18 },
];
// const filteredUsers = users.filter((value, index) => {
//   return value.id === 1;
// });
// console.log(filteredUsers);

// const filteredUsers = users.filter((user, index) => {
//   return user.name === "hamza";
// });
// console.log(filteredUsers);

// const filteredUsers = users.filter((user, index) => {
//   if (user.age <= 20) {
//     return user.age;
//   }
// }); isto kao i dole
// const filteredUsers = users.filter((user, index) => {
//   return user.age < 20;
// });
// console.log(filteredUsers);

// Array.prototype.newFilter = function (callback) {
//   const newArr = [];

//   const arrayClone = [...this];
//   for (let i = 1; i <= arrayClone.length; i++) {
//     const element = arrayClone[i];
//     if (callback(element, i, this)) {
//       newArr.push(element);
//     }
//   }

//   return newArr;
// };

//found

Array.prototype.newFind = function (callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const element = this[i];
    if (callback(element, i, this)) {
      return element;
    }
  }

  return undefined;
};

const foundUsers = users.newFind((user, index) => {
  return user.name === "irfan1";
});
console.log(foundUsers);
