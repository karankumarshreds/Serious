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

// console.log(biggestContainer([1, 5, 6, 3, 4]));

/**
 * |         6
 * |     5   |
 * |     |   |       4
 * |     |   |   3   |
 * |     |   |   |   |
 * | 1   |   |   |   |
 * _ | _ | _ | _ | _ | _
 *   0   1   2   3   4
 */

var startTime = new Date().getTime();

function biggestContainer2(array) {
    // start with extremes and move the only extreme pointer towards center
    // only if the next one is bigger from the current one
    let li = 0;
    let ri = array.length - 1;
    let area = -Infinity;
    do {
        let width = Math.abs(li - ri);
        let height = Math.min(array[li], array[ri]);
        area = Math.max(area, height * width);
        console.log({ width, height, leftIndexRightIndex: li === ri });
        if (array[li + 1] > array[li]) {
            li++;
        } else if (array[ri - 1] > array[ri]) {
            ri--;
        } else {
            li++;
            ri--;
        }
    } while (li !== ri);
    return area;
}
var endTime = new Date().getTime();

console.log(Math.abs(startTime - endTime));
