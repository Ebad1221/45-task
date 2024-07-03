"use strict";
const magicians = ["Harry potter", "hermione", "ron", "albus"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}
console.log("Original magician names:");
show_magicians(magicians);
make_great(magicians);
console.log("\n Modified magician names:");
show_magicians(magicians);
