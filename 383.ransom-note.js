/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
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
