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
