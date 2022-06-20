function biggestContainer(array) {
    // 1, 5, 6, 3, 4
    let maxArea = -Infinity;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                const width = Math.abs(i - j);
                const height = Math.min(array[i], array[j]);
                maxArea = Math.max(maxArea, width * height);
            }
        }
    }
    return maxArea;
}

console.log(biggestContainer([1, 5, 6, 3, 4]));
