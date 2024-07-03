function makeshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    return console.log("Size:".concat(size, ",Message: ").concat(message));
}
makeshirt();
makeshirt("medium");
makeshirt("Small", "Hello world!");
