// console.log("hi 1");

// const fn = () => {
//     console.log("hi");
// }

// setTimeout(fn, 1000); //kad nema broj podrazumeva se da 0

// console.log("hi 2");


//setInterval poziva svake sekinde

// console.log("hi 1");

// const fn = () => {
//         console.log("hi");
//     }
// setInterval(fn, 1000);

// console.log("hi 1");

//da se zaustavi

console.log("hi 1");

const fn = () => {
        console.log("hi");
    }

setTimeout(() => clearInterval(id), 5000); //brise posle 4 izvrsenja(5000)
//kad se prvi put pozove settimeout vrednost biti undefined

const id = setInterval(fn, 1000);

console.log("hi 1");

