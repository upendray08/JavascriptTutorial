var mydetail = {
  name: 'upendra',
  age: 22,
  address: 'indira nagar',
  married: 'Single',
  getmyInfo: function () {
    console.log(`
      my name is ${this.name},
      age is ${this.age},
      address is ${this.address},
      married ${this.married}
      `)
  },
}

console.log(mydetail.getmyInfo())
var x = {
  name: 'john cena',
  age: 50,
  address: 'new york',
}

 mydetail.getmyInfo.bind(x)();
// xdetail();