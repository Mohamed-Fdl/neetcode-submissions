class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        result = [nums[0]];
        for i in range(len(nums)):
            if nums[i] != result[-1]:
                result.append(nums[i]) 

        for i in range(len(result)):
            nums[i] = result[i]
        return len(result)
        