// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
/*let person1 = "ebad";

let personLower = person1.toLowerCase();
let personUpper = person1.toUpperCase();

let words = person1.split(' ');
let personTitle = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

console.log("lowercase:", personLower);
console.log("uppercase:", personUpper);
console.log("titlecase:", personTitle);*/ var person1 = "taha";
var personLower = person1.toLowerCase();
var personUpper = person1.toUpperCase();
var words = person1.split(' ');
var personTitle = words.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' ');
console.log("lowercase:", personLower);
console.log("uppercase:", personUpper);
console.log("titlecase:", personTitle);
