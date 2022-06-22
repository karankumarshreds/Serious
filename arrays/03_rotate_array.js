function rotateArray(array, k) {
    // 1, 2, 3, 4
    // k === 2
    // 3, 4, 1, 2
    let result = [];
    result = [...array.slice(array.length - k), ...array.slice(0, array.length - k)];
    return result;
}

console.log(rotateArray([1, 2, 3, 4], 2));
console.log(rotateArray([1, 2, 3, 4], 1));
console.log(rotateArray([1, 2, 3, 4, 5, 6], 2));
console.log(rotateArray([], 2));
