class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const rec = [];
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            const total = map.has(nums[i]) ? map.get(nums[i]) + 1 : 1;
            map.set(nums[i], total);
        }

        for (let [key, value] of map.entries()) {
            if (rec[value]) {
                rec[value] = [...rec[value], key];
            } else {
                rec[value] = [key];
            }
        }

        console.log(rec);

        for (let i = rec.length - 1; i >= 0; i--) {
            if (rec[i] != undefined && result.length < k) {
                result.push(...rec[i]);
            }
        }

        return result;
    }
}
