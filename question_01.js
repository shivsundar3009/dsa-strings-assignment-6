var diStringMatch = function(s) {
  const n = s.length;
  const perm = new Array(n + 1);
  let low = 0, high = n;

  for (let i = 0; i < n; i++) {
    if (s[i] === 'I') {
      perm[i] = low;
      low++;
    } else {
      perm[i] = high;
      high--;
    }
  }

  // The last element will be left after the loop
  perm[n] = low;

  return perm;
};