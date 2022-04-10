// function sayhello() {
//     var myname = 'upendra'
//     console.log('hello i am upendra')
//     function saymyname() {
//       console.log(`i am ${myname}`)
//     }
//     saymyname();
//   }

//   sayhello();
//   console.log(myname);

function doaddition(x) {
  return function (y) {
    return x + y
  }
}

var addx = doaddition(10)
var value = addx(23)
var result = doaddition(19)(12); // curring 
console.log(result)
