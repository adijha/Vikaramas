// function factorial(n) {
// 	console.log('first', n) // 5 ->0
// 	if (n === 0) return 1

// 	console.log('second', n) // 5 -> 1
// 	return n * factorial(n - 1)
// }

// console.log(factorial(5))

function printNumbers(n) {
	if (n === 1) {
		console.log(n)
		return
	}
	console.log(n)
	printNumbers(n - 1)
	return
}
printNumbers(3)

