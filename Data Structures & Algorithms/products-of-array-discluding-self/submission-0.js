class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let total = 1;

        let zeroCount = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                zeroCount.push(i);
                continue;
            }
            total *= nums[i];
        }

        if (zeroCount.length > 1) return new Array(nums.length).fill(0);

        if (zeroCount.length == 1) {
            const result = new Array(nums.length).fill(0);
            result[zeroCount[0]] = total;
            return result;
        }

        const result = [];

        for (let i = 0; i < nums.length; i++) {
            result[i] = total / nums[i];
        }

        console.log(total);

        return result;
    }
}
