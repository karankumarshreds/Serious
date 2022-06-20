function sortedSquared (array) {
  let li = 0
  let ri = array.length-1
  const result = new Array(array.length).fill(0)
  for (let i=0; i<array.length; i++){
    let leftSquaredValue = array[li]*array[li]
    let rightSquaredValue = array[ri]*array[ri]
    if (leftSquaredValue > rightSquaredValue) {
	    result[array.length-1-i] = leftSquaredValue
	    li++
    } else {
	    result[array.length-1-i] = rightSquaredValue
	    ri--
    }
  }
  return result
}

console.log(sortedSquared([-7, 2, 3]))
console.log(sortedSquared([-1,0,4,10]))
console.log(sortedSquared([]))
