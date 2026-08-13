class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return Array.from(new Set(nums)).length !== nums.length;
    }
}
