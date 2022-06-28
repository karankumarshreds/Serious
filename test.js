let mat = [
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 0]
]	

// 0,0 -> 5,7 == 22 

function longestPath1(matrix, source, destination) {
	let path = 0
	for (let i=0; i<mat.length; i++) {
		for (let j=0; j<mat[0].length; j++) {
			if (matrix[i][j] !== 0) {
				path++
				if (destination[0] === i, destination[1] === j) {
					console.log([i,j], "<== reached the destination")
					return path
				}
			} else {
				break;
			}
		}
	}
}

// console.log(longestPath(mat, [0,0], [5,7]))

function longestPath(matrix, source, dest) {
	let path = 0
	let coordinatesVisited = {}	
	let trail = []
	let vantagePoint = []
	let i = source[0]
	let j = source[1]
	let currentCoordinate  = [i,j]	
	do {
		coordinatesVisited[[i,j]] = true 
		let up 		= (matrix[i-1]||[])[j]
		let down 	= (matrix[i+1]||[])[j]
		let left 	= (matrix[i]||[])[j-1]
		let right 	= (matrix[i]||[])[j+1]
		
		// if there are more than one adjacent 1s, then mark the current 
		// as the new vantage point 
		let count = 0 
		if (up === 1 && !coordinatesVisited[[i-1,j]]){
			count++
		}
		if (down === 1 && !coordinatesVisited[[i+1,j]]) {
			count++
		} 
		if (left === 1 && !coordinatesVisited[[i,j-1]]) {
			count++
		} 
		if (right === 1 && !coordinatesVisited[[i,j+1]]) {
			count++
		}
		if (count >1){
			console.log("VANTAGE POINT REACHED")
			vantagePoint = [i,j]
		} else{
			if (up === 1 && !coordinatesVisited[[i-1,j]]) {
				console.log("moving up")
				i--
				trail.push(currentCoordinate)
			} else if (down === 1 && !coordinatesVisited[[i+1,j]]) {
				console.log("moving down")
				i++
				trail.push(currentCoordinate)
			} else if (right === 1 && !coordinatesVisited[[i,j+1]]) {
				console.log("moving right")
				j++
				trail.push(currentCoordinate)
			} else if (left === 1 && !coordinatesVisited[[i,j-1]]) {
				console.log("moving left")
				j--
				trail.push(currentCoordinate)
			} 		
		}	
		console.log({i,j})
	} while(i != dest[0] && j !== dest[1])
	console.log({trail})
}

console.log(longestPath(mat, [0,0], [5,7]))
