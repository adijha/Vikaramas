/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const deltas=new Map()
    for(let i=0;i<nums.length;i++){
        const item=nums[i]
        if(deltas.has(item))
            return [deltas.get(item),i]
        else{
            const delta=target-item
            deltas.set(delta,i)
        }
    }
};