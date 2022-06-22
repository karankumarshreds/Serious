// Question 1: Two Sum - You are given an array of Integers and another integer targetValue. 
// Write a function that will take these inputs and return the indices of the 2 integers in the array that add up targetValue.


function twoSums01(array, sum) {
	// 1,3
	const indeces = []
	for (let i=0; i<array.length; i++) {
		if (indeces.length === 2) break;
		const counterPart = (sum - array[i])	
		if (array.includes(counterPart)){
			indeces.push(array.indexOf(counterPart))
		}
	}
	return indeces;
}


function twoSums02(array, sum){
	const sumIndexMap = {}
	for (let i=0; i<array.length; i++){
		sumIndexMap[array[i]] = i
		if (sumIndexMap[sum - array[i]]) {
			return [i, sumIndexMap[sum - array[i]]]
		}
	}
}

console.log(twoSums01([3,5,2,9],14))
console.log(twoSums02([3,5,2,9],14))
