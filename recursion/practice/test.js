function run(array, power=1) {
	// [1,2,3,[4,5]]
	let sum = 0
	array.forEach(el => {
		if (Array.isArray(el)) {
			sum += run(el, power+1)
		} else {
			sum += el
		} 
	})
	return Math.pow(sum, power)
}

console.log(run([2,3,[4,1,2]]))
