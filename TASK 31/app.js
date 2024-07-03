"use strict";
let usernames = ["admin", "eric", "taha", "ebad", "hassan"];
if (usernames.length === 0) {
    console.log("we need to find some users.");
}
else {
    usernames.pop();
    usernames.pop();
    usernames.pop();
    usernames.pop();
    usernames.pop();
    console.log("All users are removed    " + usernames.length);
}
