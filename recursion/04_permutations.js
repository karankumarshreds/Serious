// Permutations - Given an array of distinct integers, return all the possible permutations. You can return the answer in any order.

function permutations02(array) {
	const result = []

	function swap(arr, i, j) {
		let tmpArr = [...arr]
		let tmp = arr[i]
		tmpArr[i] = arr[j]
		tmpArr[j] = tmp
		return tmpArr
	}

	function start(i, arr) {
		for(let j=i; j<array.length; j++) {
			if (i===array.length-1) {
				result.push(arr)
				return 
			}
			start(i+1, swap(arr, i, j))
		}
	}

	start(0, array)

	return result
}

console.log(permutations02([1,2,3]))
