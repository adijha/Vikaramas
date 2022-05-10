/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	let lookUpSet = new Set()

	for (let i = 0; i < 9; i++) {
		// let row = new Set();
		// let col = new Set();
		// let cube = new Set();

		for (let j = 0; j < 9; j++) {
			const item = board[i][j]
			if (item === '.') continue
			const rowString = `row${i}${item}`
			const colString = `col${j}${item}`
			const cubeString = 'cube' + item + Math.floor(i / 3) + Math.floor(j / 3)

			// let rowNum = board[i][j];
			// let colNum = board[j][i];
			// let cubeNum = board[]

			// collect all row values
			// if(rowNum !== '.'){
			//   if(row.has(rowNum)){
			//     return false;
			//   }
			//   row.add(rowNum);
			// }

			// collect all column values
			// if(colNum !== '.'){
			//   if(col.has(colNum)){
			//     return false;
			//   }
			//   col.add(colNum);
			// }
			// console.log(row)
			// console.log(col)

			// collect all cube values
			// if(cubeNum !== '.'){
			//   if(cube.has(cubeNum)){
			//     return false;
			//   }
			//   cube.add(cubeNum);
			// }
			const errCase =
				lookUpSet.has(rowString) ||
				lookUpSet.has(colString) ||
				lookUpSet.has(cubeString)

			if (errCase) {
				return false
			}
			lookUpSet.add(rowString)
			lookUpSet.add(colString)
			lookUpSet.add(cubeString)
		}
	}
	return true
}


/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudokuHashmap = function (board) {
	let lookUpSet = {}

	for (let i = 0; i < 9; i++) {
		// let row = new Set();
		// let col = new Set();
		// let cube = new Set();

		for (let j = 0; j < 9; j++) {
			const item = board[i][j]
			if (item === '.') continue
			const rowString = `row${i}${item}`
			const colString = `col${j}${item}`
			const cubeString = 'cube' + item + Math.floor(i / 3) + Math.floor(j / 3)

			// let rowNum = board[i][j];
			// let colNum = board[j][i];
			// let cubeNum = board[]

			// collect all row values
			// if(rowNum !== '.'){
			//   if(row.has(rowNum)){
			//     return false;
			//   }
			//   row.add(rowNum);
			// }

			// collect all column values
			// if(colNum !== '.'){
			//   if(col.has(colNum)){
			//     return false;
			//   }
			//   col.add(colNum);
			// }
			// console.log(row)
			// console.log(col)

			// collect all cube values
			// if(cubeNum !== '.'){
			//   if(cube.has(cubeNum)){
			//     return false;
			//   }
			//   cube.add(cubeNum);
			// }
			const errCase =
				lookUpSet[rowString] || lookUpSet[colString] || lookUpSet[cubeString]
			if (errCase) {
				return false
			}
			lookUpSet[rowString] = 1
			lookUpSet[colString] = 1
			lookUpSet[cubeString] = 1
		}
	}
	return true
}
// @lc code=end

// @lc code=end
