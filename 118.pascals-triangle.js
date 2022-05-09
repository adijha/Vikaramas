/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	const result = []
	for (let idx = 0; idx < numRows; idx++) {
		const arrayOfOnes = []
		for (let jdx = 0; jdx < idx + 1; jdx++) {
			arrayOfOnes.push(1)
		}
		result.push(arrayOfOnes)
		for (let kdx = 1; kdx < idx; kdx++) {
			result[idx][kdx] = result[idx - 1][kdx - 1] + result[idx - 1][kdx]
		}
	}
	return result
}

//for next time
//fill only first and last elements with 1
//update the middle ones

// @lc code=end
