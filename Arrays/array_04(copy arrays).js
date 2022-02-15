const fruits = ["apple","guava","pineapple"];

//copy an array using spread method
const fruitscopy = [...fruits];
console.log(fruitscopy);



//copy an array using from() method 
const copyfruits = Array.from(fruits);
console.log(copyfruits);


//copy an array using splice method 
const fruitscopy1 = fruits.splice();
const fruitscopy2 = fruits.splice(0);
console.log(fruitscopy1);
console.log(fruitscopy2);
