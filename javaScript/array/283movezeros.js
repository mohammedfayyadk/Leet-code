const nums = [0, 1, 0, 3, 12];

let moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  for (let k = j; k < nums.length; k++) {
    nums[k] = 0;
  }

  return nums;
};

console.log(moveZeroes(nums));
