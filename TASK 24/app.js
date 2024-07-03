"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
let str1 = "ebad";
let str2 = "ahmed";
let num1 = 1;
let num2 = 2;
let array = [1, 2, 3, 4, 5];
console.log(str1 === str2);
console.log(str1 === "ebad");
//test using l case
console.log(`\n using lower case `);
console.log(str1.toLowerCase() === "ebad");
console.log(str2.toLowerCase() !== "ahmed");
//numerical test
console.log(`\n using numerical values`);
console.log(num1 === 5);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 !== num2);
//using (and) and (or) operators
console.log("using and or operators");
console.log((num1 < 10) && (num2 > 10));
console.log((num1 < 10) || (num2 < 10));
//item is in array or not
console.log("\n whether item is in array or not");
console.log(array.includes(3));
console.log(array.includes(7));
