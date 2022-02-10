function getuserrole(name,role){
    switch(role){
        case "admin":
            return `${name} is a admin with all the acess`;
        case "subadmin":
            return `${name} is a subadmin with acess of only read and delete`;
           
        default:
            return "default role";
    }
}

var userrole = getuserrole("upendra","admin");
console.log(userrole);