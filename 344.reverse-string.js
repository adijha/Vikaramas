/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// r0 h [] // [h]
// r1 e [h] // [e,h]
// r2 l [e,h] // [l,e,h]
// r3 l [l,e,h] // [l,l,e,h]
// r4 o [l,l,e,h] // [o,l,l,e,h]
// r5 

var reverseString = function (s) { // r4 // r3 // r2 // r1 /r0
	if (s.length === 0) return s //false false false false true

	let last = s.pop() // last o l l e h  //s [h,e,l,l] [h,e,l] [h,e] [h]
	// console.log(s, 'climb')
	reverseString(s) // [h,e,l,l] [h,e,l] [h,e] [h] [] 
	
	s.unshift(last)
	// console.log(s, 'down')
	// return s

	// let i = 0
	// let j = s.length - 1
	// while (i < j) {
	// 	[s[i], s[j]] = [s[j], s[i]]
	// 	i++
	// 	j--
	// }
	// return s
	// if (s.length === 0) return s
	// const lastElement = s.slice(1)
	// console.log(lastElement)
	// const firstElement = s[0]
	// console.log(firstElement)

	// return reverseArrayRecursively(lastElement).concat(firstElement)
}
// @lc code=end
