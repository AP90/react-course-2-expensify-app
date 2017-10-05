// const person = {
//     name: "Andrew",
//     age: 20,
//     location: {
//         city: "Philly",
//         temp: 94
//     }
// };

// const {name = "Unknown", age} = person;


// console.log(`${person.name} is ${person.age}.`);


// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };


// const {name: publisherName = "Self-Published"} = book.publisher;


// console.log(publisherName);


//////////////////////////////////
// Array Destructuring
// //////////////////////////////

// const address = ["1299 S Juniper Street", "Philly", "Pennsylvania", "192345"];

// const [street, city, state, zip] = address;
// console.log(`You are in ${city} ${state}.`);



const item = ["Coffee (hot)", "$2", "$2.50", "$2.75"];

const [itemName, , mPrice, lPrice] = item;

console.log(`A medium ${itemName} costs ${mPrice}`);



