//user admin , subadmin ,testprep,user
var user = "admin";
switch (user) {
    case "admin":
        console.log("u can do anything");
        break;
    case "subadmin":
        console.log("create and delete");
        break;
    case "testprep":
        console.log("create and delete and test");
        break;
    default:
        console.log("default value");
        break;
}

//rating a person 
var rating = 1;
switch(rating){
    case 1:
        console.log("i am good");
        break;
    default:
        console.log("i am default");
        break;
}