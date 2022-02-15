const countryName = Array("india","poland","russia");
const indexofpoland = countryName.indexOf("poland");
console.log(indexofpoland);
// includes method 
// true or false 
const ukisornot = countryName.includes("russia");
// console.log(ukisornot);
//push and pop
//push return newlength of the array after pushing a item
//pop return the removed item only 
const newlength = countryName.push("luthvania");
// console.log(newlength);
// console.log(countryName);
const popeditem = countryName.pop();
// console.log(countryName);
// console.log(popeditem);
//splice remove multiple items at a time 
//return the new removed items array 
const start = 1;
const arrayofremoved = countryName.splice(start);
// console.log(arrayofremoved);
// console.log(countryName);
//shift can only remove the first element of an array 
//return the removed item only (string)
countryName.push("sudan");
countryName.push("nigeria");
countryName.push("australia");
// console.log(countryName);
const removed1 = countryName.shift();
// console.log(countryName);
// console.log(removed1);
//using splice u can remove element from begining to end anywhere
const start1 = 0;
const deletecount = 1;
const newarrayremoved= countryName.splice(start1,deletecount); //return the array of removed items from original arrays
console.log(newarrayremoved);
console.log(countryName);

//unshift it is used to add a element at the beginning of array 
//return the newlength of the array 
const newlength1 = countryName.unshift("newzealand ");
// console.log(newlength1);
// console.log(countryName);
//Replace multiple items in an arrays 
const start2 = countryName.indexOf("nigeria");
const deletecount2 = 2;
const removedelement2 = countryName.splice(start2,deletecount2,"unitedkingdom","sweden");
// console.log(removedelement2);
// console.log(countryName);
//merge array together using concat method
const fruits = Array("apple","banana","grapes","gauva");
const veges = Array("cucumber","carrot","potato","onion");
const combinedeatable = fruits.concat(veges);
console.log(combinedeatable);