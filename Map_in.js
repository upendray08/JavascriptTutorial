var mymap = new Map()

for (let i = 0; i < 3; ++i) {
  mymap.set(i + 1, `upendra-${i}`)
}

for (let value of mymap.values()) {
  console.log(value)
}
for (let key of mymap.keys()) {
    console.log(key)
  }
  
for(let [key,value] of mymap){
    console.log(`key is ${key} and value is ${value}`);
}

mymap.forEach((key,value)=>{
    console.log(key,value);
})

mymap.delete(1);
console.log(mymap);