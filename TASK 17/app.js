"use strict";
let guests = [
    "ali",
    "asad",
    "ebad"
];
let Guestnotcoming = "asad";
console.log(`${Guestnotcoming} can't make it to Dinner`);
guests[1] = "taha";
console.log("new set of invitations:");
for (let i = 0; i < guests.length; i = i + 1) {
    console.log(`Hello ${guests[i]}, you are invited for our dinner party tonight ,`);
}
for (let a = 0; a < guests.length; a++) {
    console.log(`${guests[a]}, I just found a bigger table, so more space is available.`);
}
guests.unshift("zia");
guests.splice(3, 0, "ahmed");
guests.push("ayyan");
for (let m = 0; m < guests.length; m++) {
    console.log(`Dear ${guests[m]}, you are invited to dinner.`);
}
console.log(`unfortunately, I can only invite two people at dinner`);
while (guests.length > 2) {
    let notinvited = guests.pop();
    console.log(`Due to limited space we can't invite you ,${notinvited}`);
}
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, you are invited`);
}
guests.pop();
guests.pop();
console.log(guests);