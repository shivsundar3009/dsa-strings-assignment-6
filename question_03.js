function validMountainArray(arr) {
    const n = arr.length;
    let i = 0;
  
    // Check if the length of arr is at least 3
    if (n < 3) {
      return false;
    }
  
    // Traverse until the peak of the mountain
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
  
    // Check if the peak is not at the first or last index
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    // Traverse from the peak to the end of the mountain
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    // Return true if we reach the end of the array
    return i === n - 1;
  }