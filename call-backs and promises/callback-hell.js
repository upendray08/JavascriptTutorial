//register 
//send email 
//login 
//getuserdata
//displaydata

function register(cb) {
    setTimeout(() => {
        console.log("register ended");
        cb();
    }, 1000);
}
function sendemail(cb) {
    setTimeout(() => {
        console.log("email sended");
        cb();
    }, 1000);
}
function login(cb) {
    setTimeout(() => {
        console.log("user get logged");
        cb();
    }, 1000);
}
function getuserdata(cb) {
    setTimeout(() => {
        console.log("got user data");
        cb();
    }, 1000);
}
function displaydata() {
    setTimeout(() => {
        console.log("dispalyed data");

    }, 1000);
}


// callback hell --> function inside calling function is called callback 
// then those function is called higher order function !
register(function () {
    sendemail(function () {
        login(function () {
            getuserdata(function () {
                displaydata();
            })
        })
    })
})
