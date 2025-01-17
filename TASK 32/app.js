"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["hassan", "ebad", "taha", "ayaan", "asad"];
let new_users = ["taha", "asif", "amir", "ahmed", "noman"];
function checkuserNames(current_users, new_users) {
    for (let new_user of new_users) {
        let lowercased_new_user = new_user.toLowerCase();
        let is_username_available = true;
        for (let current_user of current_users) {
            if (current_user.toLowerCase() === lowercased_new_user) {
                console.log(`The username '${new_user}' has already been used. Please enter a new username.`);
                is_username_available = false;
                break;
            }
        }
        if (is_username_available) {
            console.log(`The username '${new_user}' is available.`);
        }
        else {
            console.log("the username is not available. Please enter a new username");
        }
    }
}
checkuserNames(current_users, new_users);
