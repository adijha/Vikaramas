/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	for (let i = 0; i < matrix.length; i++) {
		const row = matrix[i]
		if (matrix[i].length === 1) {
			if (matrix[i][0] === target) return true
			else continue
		}
		function binarySearch(arr, elem, left, right) {
			if (left > right) return false

			const mid = Math.floor((left + right) / 2)
			const midElem = arr[mid]

			console.log(midElem)
			if (midElem === elem) return true
			else if (elem < midElem) {
				return binarySearch(arr, elem, left, mid - 1)
			} else {
				return binarySearch(arr, elem, mid + 1, right)
			}
		}
		return binarySearch(row, target, 0, row.length - 1)
	}
	return false
}
// @lc code=end

// for(let j=0;j<matrix[0].length;j++){
//   if(matrix[i][j]===target) return true
// }
