function biggestContainer1(array) {
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


function biggestContainer3(array){
	// [3,7,5,6,8,4]
	// start with the li and ri
	// if the value at li is lesser, dont move the pointer 
	// and move the ri pointer as it may have possibility of having greater next value 
	// repeat 
	let li = 0;
	let ri = array.length -1;
	let maxArea = -Infinity;
	do {
		let width = Math.abs(li-ri);
		let height = Math.max(Math.abs(array[li]), Math.abs(array[ri]))
		maxArea = Math.max(li, width*height)
		if (array[li] > array[ri]) {
			ri--;
		} else {
			li++;
		}
	} while(li !== ri);
	return maxArea;
}


console.log(biggestContainer3([1, 5, 6, 3, 4]));
console.log(biggestContainer2([1, 5, 6, 3, 4]));
console.log(biggestContainer1([1, 5, 6, 3, 4]));
