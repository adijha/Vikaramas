/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const rows = mat.length;
  const cols = mat[0].length;
	if (rows * cols !== r * c) {
		return mat
	}
	let result = []
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			result.push(mat[i][j])
		}
	}

  let result2 = []
  for (let i = 0; i < r; i++) {
    result2.push([])
    for (let j = 0; j < c; j++) {
      result2[i].push(result.shift())
    }
  }
  return result2
}
// @lc code=end
