/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

[1,1,2]

var removeDuplicates = function (nums) {
	if (nums.length <= 1) {
		return nums.length
	}

	let k = 1

	for (var i = 1; i < nums.length; i++) {

    
		if (nums[i] != nums[i - 1]) {
			nums[k] = nums[i]
			k++
		}
	}

	return k
}
// @lc code=end
