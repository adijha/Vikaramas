function reverseArray(array) {
	if (array.length === 1) return array

	console.log(array, 'climb')
	let last = array.pop()
	let firstElement = array.slice(1)
	reverseArray(array.push(firstElement))

	console.log(array, 'down')
	array.push(last)
}

console.log(reverseArray([5, 3, 1, 2, 4]))
