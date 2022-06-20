// return true if the array is non-decreasing
// in other words, check if it is increasing / or the same but not decreasing

function isMonotonicArray(array){
	let result = false 
	let lastValue = -Infinity
	for (let i=0; i<array.length; i++) {
		if (array[i] >= lastValue) {
			result = true  
			lastValue = array[i]
		} else {
			result = false 
			break
		}
		console.log(array[i+1], "<===")
	}
	return result
}

console.log(isMonotonicArray([1,2,3,3,5]))
console.log(isMonotonicArray([1,3,2,6]))
