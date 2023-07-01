function minimumProductSum(nums1, nums2) {
    // Sort nums1 in ascending order
    nums1.sort((a, b) => a - b);
    
    // Sort nums2 in descending order
    nums2.sort((a, b) => b - a);
    
    let productSum = 0;
    
    // Calculate the product sum
    for (let i = 0; i < nums1.length; i++) {
      productSum += nums1[i] * nums2[i];
    }
    
    return productSum;
  }