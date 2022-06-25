function fibonacci05(n) {
	// 0 1 1 2 3 5 8 
	let left = 0 
	let right = 1 
	let counter = 0 
	do {
		let tmp = left  
		left = right 
		right = left + tmp 
		counter++
	} while(counter < n-1)
	return right 
}

console.log(fibonacci05(4) == 3)
console.log(fibonacci05(5) == 5)
console.log(fibonacci05(100) == 354224848179262000000)
