// Given a rectangular path in the form of a binary matrix, find the length of the longest possible route from source 
// to destination by moving to only non-zero adjacent positions, i.e., We can form the route from positions having their
// value as 1. Note there should not be any cycles in the output path.

function longestPath01(matrix, startPosition, endPosition) {

	const visited = {}

	function isValidIndex(i,j) {
		if(i>matrix.lengh-1 || i<0 || j>matrix[0].length-1 || j<0) return false 
		return true 
	}

	function isValueOne(i,j) {
		if ((matrix[i]||[])[j] === 1 && !visited[`${i},${j}`]) return true 
		return false 
	}

	function isValidCoord(i,j) {
		return isValueOne(i,j) && isValidIndex(i,j)
	}

	let maxDistance = 0

	function calculate (startPosition, endPosition, distance) {
		const [i,j] = startPosition; 
		const [x,y] = endPosition;
		
		// early check if the we have reached the final position
		if (i === x && j ===y) {
			maxDistance = Math.max(maxDistance, distance);
			return 
		}
		
		// mark the current position as visited 
		visited[`${i},${j}`] = true;
		
		// check for top, bottom, right, left 
		if (isValidCoord(i-1,j)) calculate([i-1, j], endPosition,distance+1)
		if (isValidCoord(i+1, j)) calculate([i+1, j], endPosition,distance+1)
		if (isValidCoord(i, j+1)) calculate([i, j+1], endPosition,distance+1)
		if (isValidCoord(i, j-1)) calculate([i, j-1], endPosition,distance+1)

		// if there is no option left to go, mark the point as unvisited 
		visited[`${i},${j}`] = false 
	}
	calculate(startPosition, endPosition, 0)
	return maxDistance
}


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
console.log(longestPath01(mat, [0,0], [5,7]))

