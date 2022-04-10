function sayhello() {
  var myname = 'upendra'
  console.log('hello i am upendra')
  function saymyname() {
    console.log(`i am ${myname}`)
  }
  saymyname();
}

sayhello();
console.log(myname);