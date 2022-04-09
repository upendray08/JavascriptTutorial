function register() {
    setTimeout(() => {
        console.log("register ended");

    }, 1000);
}
function sendemail() {
    setTimeout(() => {
        console.log("email sended");

    }, 1000);
}
function login() {
    setTimeout(() => {
        console.log("user get logged");

    }, 1000);
}
function getuserdata() {
    setTimeout(() => {
        console.log("got user data");

    }, 1000);
}
function displaydata() {
    setTimeout(() => {
        console.log("dispalyed data");

    }, 1000);
}

// const authentication = async () => {
//     await register();
//     await sendemail();
//     await login();
//     await getuserdata();
//     await displaydata();
// }

async function authentication() {
    await register();
    await sendemail();
    await login();
    await getuserdata();
    await displaydata();
}

authentication().then(()=>{
    console.log("sucessful");
}).catch((err)=>{
    console.log(err);
})

console.log("other application works is happening here");