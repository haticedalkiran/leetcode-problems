/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let temp = nums[0];
  if (nums.length === 1) {
    return nums.length;
  }

  for (let i = 1; i < nums.length; i++) {
    if (temp === nums[i]) {
      nums.splice(i, 1);
      i--;
    } else {
      temp = nums[i];
    }
  }
  return nums.length;
};
