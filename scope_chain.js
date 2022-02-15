var myname = "upendra";
console.log(myname);
function sayname(){
    var myname = "rahul";
    console.log(myname);
    function sayname2(){
        var myname = "geeta";
        console.log(myname);
    }
    sayname2();
}
sayname();