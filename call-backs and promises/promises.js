//register 
//send email 
//login 
//getuserdata
//displaydata

function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return reject('error is register while registering the id ')
            console.log("register sended");
            resolve();
        }, 1000);
    })
}
function sendemail(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("email sended");
            resolve();
        }, 1000);
    })
}
function login(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login");
            resolve();
        }, 1000);
    })
}
function getuserdata(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("got  sended");
            resolve();
        }, 1000);
    })
}
function displaydata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("displayed sended");
            resolve();
        }, 1000);
    })
}
async function authentication() {
    await register();
    await sendemail();
    await login();
    await getuserdata();
    await displaydata();
}

console.log("other application works");

// promises is used 
// register().then(sendemail)
//     .then(login)
//     .then(getuserdata)
//     .then(displaydata)
//     .catch((err) => {
//         console.log(err);
//     });
authentication().then(() => {
    console.log("sucessful");
}).catch((err) => {
    console.log(err);
})