// Good Luck 💪🏾
function findSeven(arr) {
    // Convert the array to a single string and check for '7'
    const hasSeven = arr.some(num => num.toString().includes('7'));
    
    // Return the appropriate message
    return hasSeven ? "Found!" : "there is no 7 in the array";
}

// Examples
console.log(findSeven([1, 2, 3, 4, 5, 6, 7]));   // "Found!"
console.log(findSeven([8, 6, 33, 100]));         // "there is no 7 in the array"
console.log(findSeven([2, 55, 60, 9, 86]));     // "there is no 7 in the array"