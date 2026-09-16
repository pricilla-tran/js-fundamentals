const twoSum = (nums, target) => {
    // your code here
    const hashMap = new Map();
    for (let i=0; i < nums.length; i++){
      const complement = target - nums[i]
      if (hashMap.has(complement)) {
        return [hashMap.get(complement), i]
      } else {
        hashmap.set(nums[i], i)
      }
    }
}