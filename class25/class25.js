// var a = {name: undefined, surname: 'Ugljanin'};
// var aKeys = Object.keys(a);
// var aValues = Object.values(a);

// console.log(aKeys.includes("name"), aValues);

// if(a["name"] !== undefined) {
//     console.log("postoji");
// } else {
//     console.log("ne postoji");
// }

// var objekat = {
//     name: 'mejla',
//     surname: 'ugljanin',
//     address: {
//         street: 'Hercegovacka ',
//         number: 20,
//         city: 'Novi Pazar'
//     },
//     friends: [{name: 'bla'}, {name: 'blabla'}],
// };

// // console.log(objekat.friends[1].name);

// objekat.fullName = `${objekat.name} ${objekat.surname}`;

// delete objekat.name;
// objekat.friends.push({name: 'mejla'});
// console.log(objekat);

//kako naci nesto u nizu objekata
var nizKorisnika = [{name: 'bla', id: '123'}, {name: 'blabla'}, {name: 'blablabla'}];

// for (let i = 0; i < nizKorisnika.length; i++) {
//     const korisnik = nizKorisnika[i]; 

//     if (korisnik.name === 'blabla') {
//         console.log(korisnik);
//     }
// }

function findObject(niz, parametar, vrednostParametara) {
    for (let i = 0; i < niz.length; i++) {
        const objekat = niz[i]; 
    
        if (objekat[parametar] === vrednostParametara) {
            console.log(korisnik);
        }
    }
}

findObject(nizKorisnika, 'name', 'blabla')