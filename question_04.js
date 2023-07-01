function findMaxLength(nums) {
    const map = new Map(); // To store the running sum and its first occurrence index
    let maxLength = 0;
    let count = 0; // Initialize count to 0
  
    map.set(0, -1); // Initial sum is 0 with index -1
  
    for (let i = 0; i < nums.length; i++) {
      // Increment count by 1 if nums[i] is 1, otherwise decrement it by 1
      count += nums[i] === 1 ? 1 : -1;
  
      // If the count is already present in the map, update the maxLength
      if (map.has(count)) {
        maxLength = Math.max(maxLength, i - map.get(count));
      } else {
        // Otherwise, store the count with its index in the map
        map.set(count, i);
      }
    }
  
    return maxLength;
  }