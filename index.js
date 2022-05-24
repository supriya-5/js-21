console.log("working");

//async/await - they are used to handle the promises more efficiently. The word async is used before a function to make sure that it returns a promise. So, we therefore use sync before the function to return a promise instead of some values/function.

//await is used to wait for the result that is supposed to be returned from the promise.
//so we can use the keyword await when calling the function which returns a promise.

//await is always used with async keyword . it can't never be alone.(await)

//Async/Await is also used for making the API calls.

const fn1 = () => {
    return "I am function one";
}
const fn3 = () => {
    return "I am function three"
}
const fn2 = () => {
    return new Promise((resolve,reject) =>  {
        setTimeout(() => {
            resolve ("I am function two")
        }, 3000);
    })
}

const callFns = async () =>{
    let res1 = fn1();
    console.log(res1);

    let res2 = await fn2();
    console.log(res2);


    let res3 = fn3();
    console.log(res3);
}

// callFns();

//----------------------------------------------------------------------------------

async function tryingPromises() {
    console.log("I am inside the function");
    const response = await fetch('https://api.github.com/users');

    console.log("Before the response was received ");

    const users = await response.json();
    console.log("users are resolved");
    
    return users;
}

console.log("before calling the function");
let data = tryingPromises();
console.log("after calling the function");
console.log(data);
data.then((res) =>{
    console.log("the response received is", res);
    // res.map((item)=>{
    //     console.log(item.id);
    })
//})
console.log("end of program");