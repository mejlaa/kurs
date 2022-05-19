//brise jedan karakter koji izaberemo 

// function removeCharacter(title = '', character) {
//     return title.replace(character, "");
// }

// console.log(removeCharacter("irfan je cccc", 'c'));


// const removeCharacters2 (title = '123j', character = 'j') => {
//     return title.replace(character, "");
// }

//shallow copy
//menjaju se oba niza
// let array1 = [1,2,3,4,5,6,7];
// let array2 = array1;

// array2.push('m');

// console.log(array1, array2);

//samo za kopiranje propertija, menja se samo 1
//deep copy
// let array1 = [1,2,3,4,5,6,7];
// let array2 = [...array1];

// array2.push('m');

// console.log(array1, array2);

//pretvaranje niza karaktera u string
// function charsToString(...args) {
//     for (let index = 0; index < array.length; index++) {
//         let sum = "";
//         const element = array[index];
//         sum += element;
//     }

//     return sum;
// }

// console.log(charsToString(1,2,3,4,5,'a','b','b','22'));

const sum = (...args) => {
    let tempSum = "";

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (typeof element === 'number') {
                tempSum += element;
        } 
        // if (typeof element === 'string') {
        //     tempSum += +element; //isto kao i tempSum += parseInt(element);
        // }

        if (typeof element === 'string') {
            tempSum += Object.is(+element, NaN) ? 0 : +element; 
        }
    }
    

    return tempSum;
}
console.log(sum(1,2,3,4,5,'a'));