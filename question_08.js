function multiplySparseMatrices(mat1, mat2) {
    const m = mat1.length;    // Number of rows in mat1
    const k = mat1[0].length; // Number of columns in mat1
    const n = mat2[0].length; // Number of columns in mat2
  
    // Initialize the result matrix with zeros
    const result = [];
    for (let i = 0; i < m; i++) {
      result.push(new Array(n).fill(0));
    }
  
    // Perform matrix multiplication
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let l = 0; l < k; l++) {
          result[i][j] += mat1[i][l] * mat2[l][j];
        }
      }
    }
  
    return result;
  }