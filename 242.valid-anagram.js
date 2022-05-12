/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (ransomNote, magazine) {
	if (ransomNote.length !== magazine.length) return false
	const ransomNoteMap = new Map()
	for (let i = 0; i < magazine.length; i++) {
		if (ransomNoteMap.has(magazine[i]))
			ransomNoteMap.set(magazine[i], ransomNoteMap.get(magazine[i]) + 1)
		else ransomNoteMap.set(magazine[i], 1)
	}
	for (let i = 0; i < ransomNote.length; i++) {
		const notAvailable =
			!ransomNoteMap.has(ransomNote[i]) ||
			ransomNoteMap.get(ransomNote[i]) === 0

		if (notAvailable) return false

		ransomNoteMap.set(ransomNote[i], ransomNoteMap.get(ransomNote[i]) - 1)
	}
	return true
}
// @lc code=end
