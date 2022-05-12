/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const store = new Map()
    for (let i=0; i<s.length; i++) {
        store.has(s[i]) ? store.set(s[i],-1) : store.set(s[i],i)
    }
    for (const value of store.values()) {
        if (value !== -1) return value
    }
    return -1
};