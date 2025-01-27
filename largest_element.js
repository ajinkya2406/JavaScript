function findLargestElement(arr) {
    if (arr.length === 0) {
        return null; 
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}


let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
let largestElement = findLargestElement(numbers);
console.log("Largest element in the array: " + largestElement);
