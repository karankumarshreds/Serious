// Question 1: Fibonacci - In the Fibonacci sequence, each subsequent term is obtained by adding the preceding 2 terms. 
// This is true for all the numbers except the first 2 numbers of the Fibonacci series as they do not have 2 preceding numbers. 
// The first 2 terms in the Fibonacci series is 0 and 1. F(n) = F(n-1)+F(n-2) for n>1. Write a function that finds F(n) given n 
// where n is an integer greater than equal to 0. For the first term n = 0.

let currentIndex = 2 
let array = [0,1]
function fibonacci(k) {
		// 0 1 1 2 3 5 8
		// 0 1 2 3 4 5 6 
		// take 0 and add 1 to it 
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

console.log(fibonacci(3) === 2)
console.log(fibonacci(4) === 3)
console.log(fibonacci(6) === 8)
