// console.log("async start");

// setTimeout(() => {
//     console.log("This run after 2 sec")
// }, 2000);

// console.log("async end");


console.log("sync start");

function doTask() {
    for(let i = 0; i < 10000; i++){

    }
    console.log("sync task finish")
}
doTask();
console.log("sync end");

