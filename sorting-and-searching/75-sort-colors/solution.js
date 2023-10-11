/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  var colors = {
    zero: 0,
    one: 0,
    two: 0,
  };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) colors.zero += 1;
    else if (nums[i] === 1) colors.one += 1;
    else colors.two += 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i < colors.zero) nums[i] = 0;
    else if (i < colors.zero + colors.one) nums[i] = 1;
    else nums[i] = 2;
  }
};
