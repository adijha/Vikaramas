/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   for(let i=0;i<nums.length-1;i++){
     if(nums.indexOf(nums[i+1])===i){
        nums.splice(i,1);
        i--;
        }
    }
};