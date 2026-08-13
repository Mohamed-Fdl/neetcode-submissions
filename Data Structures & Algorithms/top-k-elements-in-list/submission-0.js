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

        for (let [_, value] of map.entries()) {
            rec.push(value);
        }

        const topValues = rec.sort((a, b) => b - a).slice(0, k);

        for (let [key, value] of map.entries()) {
            if(topValues.includes(value)) result.push(key)
        }

        return result;
    }
}
