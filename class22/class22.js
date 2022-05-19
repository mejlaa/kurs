
// array = [1,2,3,4,[1,2,3,4,[1,2,3,4,[1,2,3,4]]]];
// console.log(array[4][4][4])

// var n = 10;
// var s=0;
// for (var i = 0; i<n; i++) {
//     s+=i;

// }
// console.log(s);

// var array = [1,2,3,4,5,6];
// var n=4;

// for (var i=0; i<array.length[n]; i++) {
//     if (array[i]==n) {
//         console.log(i);
//     } 
// }

// var min = array[0]; 
// var max = array[0];

// for ( var i = 0; i < array.length; i++) {
//     if (min > array[i]) {
//         min = array[i];
//     }
//     if (max < array[i]) {
//         max = array[i];
//     }
// }
// console.log(min);
// console.log(max);

var array1 = ['a', 'b', 'c', 'd'];
var array2 = ['a', 'b', 'f'];

var array3 = array1.concat(array2);
console.log(array3);

uncommonArr = [];
array3.forEach((element) => {
    if(!uncommonArr.includes(element)) {
        uncommonArr.push(element);
    }
})
console.log(uncommonArr);

// var uncommon = [];
// for (var i = 0; i < array1.length; i++) {
//     uncommon.push[i];
//     for (var j = 0; j < array2.length; j++) {
//         if ((array[i] !== array[j]) && (i != j)){
            
//         } 
//     }
// }


// const mejlaArray = [
//     'mejla', 
//     'ugljanin',
//     2022 - 1994,
//     'student'. 
//     ['mejla', 'mejla', 'mejla']
// ];

// const mejla = {
//     firstName: 'Mejla',
//     lastName: 'Ugljanin',
//     age: 2022 - 1994,
//     job: 'teacher',
//     friends: ['mejla', 'mejla', 'mejla']
// }; 
// // console.log(mejla);

// // console.log(mejla.lastName);
// // console.log(mejla['lastName']);

// const nameKey = 'Name' ;
// console.log(mejla['first' + nameKey]);
// console.log(mejla['last' + nameKey]);

// mejla.location = 'novi pazar';
// mejla['instagram'] = '@mejlaaa';
// console.log(mejla);

// //mejla has 3 friends, and his best friend is called mejla

// console.log(`${mejla.firstName} has ${mejla.friends.length} friends and her best friend is called ${mejla.friends[0]}`);

// const mejla = {
//     firstName: 'Mejla',
//     lastName: 'Ugljanin',
//     birthYear: 2022 - 1994,
//     job: 'teacher',
//     friends: ['mejla', 'mejla', 'mejla'],
//     hasDriversLicence: true,
    
    
// }; 