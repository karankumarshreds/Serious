// Question 1: Fibonacci - In the Fibonacci sequence, each subsequent term is obtained by adding the preceding 2 terms. 
// This is true for all the numbers except the first 2 numbers of the Fibonacci series as they do not have 2 preceding numbers. 
// The first 2 terms in the Fibonacci series is 0 and 1. F(n) = F(n-1)+F(n-2) for n>1. Write a function that finds F(n) given n 
// where n is an integer greater than equal to 0. For the first term n = 0.

let currentIndex = 2 
let array = [0,1]
function fibonacci01(k) {
		let _k = k -2 
		function recurse(l) {
				let sum = array[array.length-1] + array[array.length-2]
				array.push(sum)
				if (l===0) return 
				recurse(l-1)
		}
		recurse(_k)
		return array[k]
}

console.log(fibonacci01(3) === 2)
console.log(fibonacci01(4) === 3)
console.log(fibonacci01(6) === 8)

function fibonacci02(n){
		if (n<=1) return n
		else return fibonacci02(n-1) + fibonacci02(n-2)
}

console.log(fibonacci02(3) === 2)
console.log(fibonacci02(4) === 3)
console.log(fibonacci02(6) === 8)

// memoized solution 
function fibonacci03(n) {
		const map = {}
		function recurse(n) {
				if (n<=1) return n 
				else {
						if (!map[n-1]) map[n-1] = fibonacci03(n-1)
						if (!map[n-2]) map[n-2] = fibonacci03(n-2)
						return map[n-1] + map[n-2]
				}
		}
		return recurse(n)
}

console.log(fibonacci03(3) === 2)
console.log(fibonacci03(4) === 3)
console.log(fibonacci03(6) === 8)
