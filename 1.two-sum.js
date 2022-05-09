/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let sortedNums = nums.sort((a, b) => a - b)

	for (let i = 0; i < nums.length; i++) {
		let sum = sortedNums[i] + sortedNums[i + 1]
		if (sum === target)
			return [nums.indexOf(nums[i]), nums.indexOf(nums[i + 1])]
	}
}
// @lc code=end

