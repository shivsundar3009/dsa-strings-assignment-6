function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      // If the length is odd, it cannot be a doubled array
      return [];
    }
  
    const countMap = new Map();
    const original = [];
  
    // Count the frequency of each element in `changed`
    for (let i = 0; i < changed.length; i++) {
      const num = changed[i];
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    // Iterate through the elements of `changed`
    for (let i = 0; i < changed.length; i++) {
      const num = changed[i];
  
      if (countMap.get(num) === 0) {
        // Skip if the current element has already been used
        continue;
      }
  
      const doubledNum = num * 2;
  
      if (!countMap.has(doubledNum) || countMap.get(doubledNum) === 0) {
        // If the double of the current element is not found or has already been used, it is not a doubled array
        return [];
      }
  
      // Add the current element to `original` and decrement the frequency counts
      original.push(num);
      countMap.set(num, countMap.get(num) - 1);
      countMap.set(doubledNum, countMap.get(doubledNum) - 1);
    }
  
    return original;
  }