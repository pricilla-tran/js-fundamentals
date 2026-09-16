const removeDuplicates = (nums) => {
    let left = 0

    for (let i = 1; i < nums.length; i++) {
        // your code here — one if statement, two lines inside it
      if (nums[i] !== nums[left]) {
        left++;             // Move the unique tracker forward
        nums[left] = nums[i]; // Overwrite the duplicate with the new unique value
      }
    }

    return left + 1
}