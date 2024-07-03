var guests = [
    "ali",
    "asad",
    "ebad"
];
var Guestnotcoming = "asad";
console.log("".concat(Guestnotcoming, " can't make it to Dinner"));
guests[1] = "taha";
console.log("new set of invitations:");
for (var i = 0; i < guests.length; i = i + 1) {
    console.log("Hello ".concat(guests[i], ", you are invited for our dinner party tonight ,"));
}
for (var a = 0; a < guests.length; a++) {
    console.log("".concat(guests[a], ", I just found a bigger table, so more space is available."));
}
guests.unshift("zia");
guests.splice(3, 0, "ahmed");
guests.push("ayyan");
for (var m = 0; m < guests.length; m++) {
    console.log("Dear ".concat(guests[m], ", you are invited to dinner."));
}
