console.log("starting");
setTimeout(()=>{
    console.log("after 2 second");
},2000)

setTimeout(() => {
    console.log("after 0 sec");
}, 0);
console.log("ending");