// console.log(a);
// var a ;
// console.log(a);
// a=10;
// console.log(a);

// // console.log(b);
// a="java";
// console.log(a);
// a=true;
// console.log(a);

// javascript lexical environment and scope 

// function b() {
//     var a;
//     console.log(a);
// }
// b();

// function b() {
//     var a = 10
//     c();
//     function c() {
//         console.log(a);
//     }
// }
// var a = 10;
// b();
// var newobject = new Object();
// newobject.name = "upendra";
// newobject.num = 20;
// console.log(newobject.name);

// number increment and  decrement 
// var num = 12;
// console.log(num++);
// console.log(++num);

// string 
// var name = "upendra";
// var greet = "hello i am upendra \"hello i am\"";
// console.log(greet);

// var sentence = "hello my name is upendra "+"i don't like u \f";
// console.log(sentence);
// var username = "upendra yadav";
// username = "rahul";
// console.log(username);

// var username = "upendra";
// username = "rahul";
// console.log(username[0]);
// username[1]="e";
// console.log(username);

// var stringone = "hello i am upendra nothing more than am that";
// console.log(stringone.includes("than"));
// console.log(stringone.match("am"));
// console.log(stringone.repeat(2));
// console.log(stringone.replace("am","rahul"));
// console.log(stringone.search("am"));
// console.log(stringone.split(" "));
// console.log(stringone.substring(2,5));

// function 
// console.log(addcube(1,2));
// function addcube(a,b){
//     function cube(a){
//         return a**3;
//     }
//     return cube(a)+cube(b);
// }

// == vs === 
// console.log("upendra is not programmer"===new String("upendra is not programmer"));

//null and undefined 
// console.log(typeof undefined);
// shortcircuit evalution
// function greet(name) {
//     // name = name || "upendra";
//     console.log(`hello welcome ${name}`);
// }

// greet();
// greet()

//ternary operator
// var username = true;
// username = 10;
// // // console.log((username== true)?"upendra":"rahul");
// // username > 5 ? (
// //     console.log("hello i am ready"),
// //     stop = false
// // ) : (
// //     console.log("hello i am not ready"),
// //     stop = true
// // );

// var firscheck = false;
// var secondcheck = false;
// var access = firscheck ? "acess denied" : (secondcheck ? "acess denied" : "acess granted");
// console.log(access);