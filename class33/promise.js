// const promise = new Promise((resolve, reject) => {
//     const random = Math.random() * 1000;
//     setTimeout(() => {
//         if (random)
//         resolve(random);
//     }, random);
// });

// console.log(promise.then(value) => console.log(value));

const promise = new Promise((resolve, reject) => {
  const random = Math.random() * 1000;
  setTimeout(() => {
    if (random > 500) {
      resolve(random);
    } else {
      reject(random);
    }
    resolve(random);
  }, random);
});

const promise2 = async () => {
  const random = Math.random() * 1000;

  return random;
};
