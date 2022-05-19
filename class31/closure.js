// const outer = (a) => {
//     return (b) => {
//         return a + b;
//     };
// };

// const inner = outer(10); //outer() (b) => {return a+b;}

// console.log(inner(20));
// console.log(inner(40));
// console.log(inner(90));
//outer(10)(20) isto kao gore

const closure = (array) {
    return () => {
        return array.length > 0) ? true : false;
    };
};

const array1 = [123,23,32,3];
const array2 = [20];

const isEmpty1 = closure(array1);
const isEmpty2 = closure(array2);

// console.log(isEmpty1());
// array1 = [];
// console.log(isEmpty1());
//true true

// console.log(isEmpty2());
// array2 = [];
// console.log(isEmpty2());
//true true

console.log(isEmpty1());
array2.pop();
console.log(isEmpty2());
//true false