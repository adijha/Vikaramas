/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  var insertPosition = m + n - 1;
  var first=m-1;
  var second=n-1;
  while (second >= 0) {
    if (nums1[first] > nums2[second]) {
      nums1[insertPosition] = nums1[first];
      first--;
    } else {
      nums1[insertPosition] = nums2[second];
      second--;
    }
    insertPosition--;
  }
}