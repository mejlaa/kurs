// var a=10;
// var b=20;
// var temp;

// temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);

// var age = 20;
// var fullGreetings = `i am ${age} years old`;
// console.log(fullGreetings);

//access array data with indexes
// const array = [50, 60, 70];
// array[0];
// console.log(array[0]);
// const data = array[1];
// console.log(data)
// const myArray = [18, 64, 99];
// const myData = myArray[2];

// const arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [[10,11,12],13,14]
// ];

// console.log(arr[2][1]);

//manipulate arrays with push()
//push() append data to the end of on array
// const arr1 = [1,2,3];
// arr1.push(4);
// const arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);

// const myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3]);

// const myData = ["Mejla", "Ugljanin", "wanna be  coder"];
// myData.push([1994, 27]);
// console.log(myData);
// myData.push(["hehe", "lol"]);
// console.log(myData)


//manipulate arrays with pop()
//pop() removes the last element from an array and returns that element

// const threeArr = [1,4,6];
// const oneDown = threeArr.pop();

// const myArray = [['mejla', 27], ['cat', 2]];
// const removedFromMyArray = myArray.pop();
// console.log(removedFromMyArray);
// console.log(myArray);


//shift() removes the first element from an array 

// const ourArr = ["Stimpson", "J", "cat"];
// const removedFromMyArray = ourArr.shift();

// const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray1 = myArray.shift();

// console.log(removedFromMyArray1);
// console.log(myArray);


//unshift() works like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array

// const ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift();
// ourArray.unshift("Happy");

// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["Paul", 35]);

// const arr = [2,4,"mejla", "ugljanin"];
// arr.shift();
// arr.unshift(6);

// arr.pop();
// arr.push("jejjjj");
// console.log(arr);

//functions
// function reusableFunction() {
//     console.log("Hi world!");
// }
// reusableFunction();
// function plusThree(num) {
//     return num + 3;
// }
// const ans = plusThree(6);
// console.log(ans);

// function timesFive(x) {
//     return x * 5;
// }
// const y = timesFive(4);
// console.log(y);

// function myTest() {
//     const loc = "foo";
//     console.log(loc);
// }
// myTest();
// console.log(loc)

// const outerWear = "t-shirt";

// function myFun() {
//     const outerWear = "sweater";
//     return outerWear;
// }
// console.log(myFun());

// let sum = 2;

// function addSum(num) {
//     sum += num;
//     // return sum;
// }

// console.log(addSum(3));

// function nextInLine(arr, item) {
//     arr.push(item);

//     return arr.shift();
// }

// const testArr = [1, 2, 3, 4, 5];

// console.log("Before: " + testArr);
// console.log(nextInLine(testArr, 5));
// console.log("After: " + testArr);

// function logger() {
//     console.log("my name is mejla");
// }

// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(4,5);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

//function declaration 
// const age1 = calcAge1(1994); //we can call function before declaration and it still works which is not good idea

// function calcAge1(birthYear) {
//     return age = 2022 - birthYear;
// }
// console.log(age1);

//function expression 
//that is not the case with function expression

// const calcAge2 = function (birthYear) {
//     return age = 2022 - birthYear;
// }

// const age2 = calcAge2(1994);
// console.log(age2);


//arrow function
// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1994);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1994, "mejla"));
// console.log(yearsUntilRetirement(1991, "ugljanin"));

// function cutFruitPieces(fruit) {
//     return fruit * 6;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
//     return juice;
// }

// console.log(fruitProcessor(2,3));

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return retirement;
//     } else {
//         return `${firstName} is already retired.`;
//     }

//     // return `${firstName} retires in ${birthYear} years.`;
// }

// console.log(yearsUntilRetirement(1994, "mejla"));
// console.log(yearsUntilRetirement(1950, "mike"));

// var c= [].concat(array1).concat(array2) novi niz sastavljen od dva niza

// coding challange #1
//function to calculate the avarage of 3 scores
// const calcAvarage = (a,b,c) => (a+b+c)/3;

// //calculate the avarage for both team
// const scoreDolphins = calcAvarage(85, 54, 41);
// console.log(`Dolphins ${scoreDolphins}`);
// const scoreKoalas = calcAvarage(93, 44, 37);
// console.log(`Koalas ${scoreKoalas}`);

// const checkWinner = function  (avgDolphins, avgKoalas) {
//     if(avgDolphins >= avgKoalas * 2) {
//         console.log("The winner is team Dolphins!");
//     } else if(avgKoalas >= avgDolphins * 2) {
//         console.log("The winner is team Koalas");
//     } else {
//         console.log("No team wins!");
//     }
// }
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const friends = ['michael', 'stiven', 'peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[friends.length - 1]);

// friends[2] = 'jay';
// console.log(friends);

// const firstName = 'mejla';
// const mejla = [firstName, 'ugljanin', 27, friends];
// console.log(mejla);

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]); 
// const age2 = calcAge(years[1]); 
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3); 

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ['michael', 'steven', 'peter'];
// const newLength = friends.push('jay'); //this works when we have to calculate a lenght of new array, so we store it into a new value and then use it
// console.log(friends);
// console.log(newLength);

// friends.unshift('john');
// console.log(friends);

// const popped = friends.pop(); //this method does return something, and it is removed element, so we can store it into a new value and then use it
// console.log(popped);
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('steven'));
// console.log(friends.indexOf('bob'));

// friends.push(23);
// console.log(friends.includes('steven'));
// console.log(friends.includes('bob'));
// console.log(friends.includes(23));

// if (friends.includes('yy')) {
//     console.log('you have a friend called peter');
// }

//coding challange #2

// function calcTip(bill) {
//     if (bill >=50 && bill<=300) {
//         bill += bill * 0.15;
//         console.log(`tip is 15%, so your bill is ${bill}`);
//     } else {
//         bill += bill * 0.2;
//         console.log(`tip is 20%, your bill is ${bill}`);
//     }
// }

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);