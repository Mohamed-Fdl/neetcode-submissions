class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let t = 0;
        let i = 0;
        let j = 1;

        while (t <= nums.length - 1) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            } else {
                if (j === nums.length - 1) {
                    t++;
                    j = t + 1;
                    i++;
                } else {
                    j++;
                }
            }
        }
    }
}
