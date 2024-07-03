// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

/*let person1 = "ebad";

let personLower = person1.toLowerCase();
let personUpper = person1.toUpperCase();

let words = person1.split(' ');
let personTitle = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

console.log("lowercase:", personLower);
console.log("uppercase:", personUpper);
console.log("titlecase:", personTitle);*/let person1: string = "ebad";

let personLower: string = person1.toLowerCase();
let personUpper: string = person1.toUpperCase();

let words: string[] = person1.split(' ');
let personTitle: string = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

console.log("lowercase:", personLower);
console.log("uppercase:", personUpper);
console.log("titlecase:", personTitle);