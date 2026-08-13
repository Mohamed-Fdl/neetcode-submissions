class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;
        
        let chain = 1;
        let chainsLength = [];
        const sorted = [...new Set(nums.sort((a, b) => a - b))];
        console.log(sorted);

        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i] + 1 == sorted[i + 1]) {
                chain++;
            } else {
                chainsLength[chain] = chain;
                chain = 1;
            }
        }
        chainsLength[chain] = chain;


        return chainsLength.length -1;
    }
}
