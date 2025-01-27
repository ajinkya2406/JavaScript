function reverseString(str) {
    return str.split('').reverse().join('');
}


let originalString = "Hello, world!";
let reversedString = reverseString(originalString);
console.log("Original string: " + originalString);
console.log("Reversed string: " + reversedString);
