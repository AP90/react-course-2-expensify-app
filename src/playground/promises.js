const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: "Andrew",
        //     age: 25
        // });
        reject("something went wrong");
    }, 1500);
});
console.log("before");

promise.then((data) => {
    console.log(data.name);
}).catch((error) => {
    console.log(error);
});

console.log("after");