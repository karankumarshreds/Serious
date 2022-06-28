// Equivalent value of an array is the sum of its elements raised to the number which represents how far nested it is. 
// For e.g. [2,3,[4,1,2]] = 2+3+ (4+1+2)^2

function peculiarArray(array, power=1){
	let sum = 0
	array.forEach(el => {
		if (Array.isArray(el)) {
			sum += peculiarArray(el,power+1)
		} else {
			sum += el 
		}
	})	
	return Math.pow(sum, power)
}

console.log(peculiarArray([2,3,[4,1,2]]) )
