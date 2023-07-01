function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let low = 0;
    let high = m * n - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const num = matrix[Math.floor(mid / n)][mid % n];
  
      if (num === target) {
        return true;
      } else if (num < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return false;
  }