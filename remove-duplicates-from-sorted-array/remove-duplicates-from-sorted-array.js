/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     // const sorted= nums.sort((a,b)=>(a-b))

    
    
    
    
    
//    // for(let i=0;i<nums.length-1;i++){
//    //   if(nums.indexOf(nums[i+1])===i){
//    //      nums.splice(i,1);
//    //      i--;
//    //      }
//    //  }
// };
// var removeDuplicates = function (nums) {
// 	let last = nums.length
// 	let k = 0
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] === nums[i + 1]) {
// 			nums[i + 1] = nums[i + 2]
// 			// nums.splice(i, 1)
// 			// last--
//             // i++
//             k++
// 		}
// 	}
// 	// const
// }

var removeDuplicates = function (nums) {
    if(nums.length <= 1) {
        return nums.length;
    }
    
	// let last = nums.length
	let k = 1
	// for (let i = 0; i < last; i++) {
	// 	if (nums[i] === nums[i + 1]) {
	// 		nums[i + 1] = nums[i + 2]
	// last--
	// 	}
	// }

    
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] != nums[i-1]){
            nums[k++] = nums[i];
            // k++
        }
    }
    // console.log(last)
    // console.log(nums.length-last)
    // nums.length=last+1
    return k;
}