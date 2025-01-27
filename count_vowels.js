function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


let inputString = "Hello, world!";
let vowelCount = countVowels(inputString);
console.log("Number of vowels in the string: " + vowelCount);
