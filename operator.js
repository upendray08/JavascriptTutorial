var price = 2000;
var selling = 1256;
var discount = (price - selling)/price *100;
var discountpercentage = Math.round(discount);
var result = price> selling;
console.log(typeof result);
console.log(discountpercentage + "% off");
