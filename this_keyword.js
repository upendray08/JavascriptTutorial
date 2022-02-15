// this keyword in case of NODE it give us a { } empty scope 
// in case of browser it give us a window object 
console.log(this);
function sayHello(){
    console.log(this);
}
sayHello();

