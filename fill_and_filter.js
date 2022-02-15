//fill and filter 
// start inclusive and end exclusive
// return an new array 
// previous array get updated 
const arr = [1,2,3,4,5,6]
// const result = arr.fill("nothing",1,4);
// console.log(arr);
// console.log(result);

//filter 
// const result1 = arr.filter((e)=> (e<6));
// console.log(result1);
//slice  
// const data1 = arr.slice(-3,-1); // end is exclusive and start is inclusive 
//data1 is a new array which is sliced 
//arr is does not get updated 
// console.log(data1);
// console.log(arr.slice(0,4));
// console.log(arr);
//splice 
//return a new array which is splice from 0,3 
//after splice orginal arr get updated or spliced 
console.log(arr.splice(0,3));
console.log(arr);
