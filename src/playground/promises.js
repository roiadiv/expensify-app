//resolve = when the data pass correctly
//reject = when something go worng
const promise = new Promise((resolve,reject)=>{
    //resolve('This is my resolved data');//we call resolve here
    setTimeout(()=>{
        // resolve({
        //     name:'roi',
        //     age:23
        // });
        reject('Something went worng');
    },10);
});

//'then' is register a callback that call when the promise resolve!!
//'chtch is register a callback that call when the promise reject!!
promise.then((data)=>{
    console.log(data);
    return 'this to the nex then';
}).then((fromTheFirstThen)=>{
    console.log(fromTheFirstThen);
}).catch((error)=>{
    console.log(error);
});