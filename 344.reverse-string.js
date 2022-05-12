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
var reverseString = function (s) {
	if (s.length === 0) return s

	let last = s.pop()
	// console.log(s, 'climb')
	reverseString(s)
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
