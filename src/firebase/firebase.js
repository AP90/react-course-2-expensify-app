// import in its totality
import * as firebase from "firebase";


// taken from website
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STOREAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

// simplify calls
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };










// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   });

//   database.ref("expenses").on("value", (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   });


// database.ref("expenses").push({
//     description: "toffeepops",
//     note: "great purchase",
//     amount: 2,
//     createdAt: 0
// });


// database.ref("notes").push({
//     title: "topic",
//     body: "raect"
// });


// database.ref().on("value", (snapshot) => {
//     const obj = snapshot.val();
//     console.log(`${obj.name} is a ${obj.job.title} at ${obj.job.company}`);
// }, (e) => {
//     console.log("error fetching data", e);
// });

// setTimeout(() => {
//     database.ref().update({
//         name: "Yarius"
//     });
// }, 10000);

// database.ref("location")
//     .once("value")
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log("error fetching data", e);
//     });


// adds data to database 
// database.ref().set({
//     name: "Bob",
//     age: 27,
//     stressLevel: 6,
//     job: {
//         title: "Software developer",
//         company: "Google"
//     },
//     location: {
//         city: "Philly",
//         country: "US"
//     }
// }).then(() => {
//     console.log("data is saved");
// }).catch((error) => {
//     console.log("This failed", error);
// });


// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle"
// });


// // removes data
// database.ref("isSingle").remove()
// .then(() => {
//     console.log("isSingle removed");
// }).catch((e) => {
//     console.log("error", e);
// });

// // updates data
// database.ref().update({
//     name: "Mike",
//     age: 34,
//     job: "Software developer",
//     isSingle: null
// });
