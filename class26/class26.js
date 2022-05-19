// function sum(n) {
//     var s = 0; 

//     for (let i = 1; i <= n; i++) {
//         s += i;
//     }
    
//     return s;
// }

// function sumR(n) {
//     var sum = 0;
//     if (n === 1) {
//         return 1;
//     }

//     sum = n + sumR(n - 1);
//     return sum;
// }

// sum = 4 + sumR(3); //4 + 3 + 2 + 1
// sum = 3 + sumR(2); // 3 + 2 +1
// sum = 2 + 1 // zbog if; 

// console.log(sumR(10));

// function pro(n) {
//     var p = 1;
//     if (n === 1) {
//         return 1;
//     }

//     p = n * pro(n - 1);
//     return p;
// }

// console.log(pro(5));

// 4
// [4,3,2,1]

// function countdown(n) { 
//     if (n === 1) {
//         return [1];
//     } 

//     var string = `${n} ${countdown(n - 1)}`;
//     // var string = n + " " + countdown(n - 1);
//     // var array = [n, ...countdown(n - 1)];

//     // var array = [];
//     // array.push(n);
//     // array.push(...countdown(n - 1));

//     return string;
// }
// console.log(countdown(4));

// var a = [1, 2, 3, 4, 5];
// var b = [...a]; //pravi novi niz ... koristi da ostavimo njegove vrednosti
// b.push(4);
// console.log(a, b);

// 2, 5
// 2, 3, 4, 5
function range(a, b) {
    if (a === b) {
        return b;
    }

    var string = `${a}, ${range(a + 1, b)}`;

    return string;
}

console.log(range(2, 5));