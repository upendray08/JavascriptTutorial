const values = []

for (let i = 0; i < 10; ++i) {
  values.push([2 ** i, (2 * i) ** i])
}
// console.log(values)


//table method will return the values in tabular 
// way  
console.table(values);
const multiplicationtable = [];
for(let i=0;i<10;++i){
    multiplicationtable.push([
        2*(i+1),3*(i+1)
    ])
}

console.log(multiplicationtable);
//table 
console.table(multiplicationtable);