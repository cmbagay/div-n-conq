function countZeroes(arr) {
  let zeroArr = arr;
  let lastIdx = zeroArr.length - 1;
  let medianIdx = Math.floor(arr.length / 2);

  while (zeroArr[0] != 0) {
    if (zeroArr[medianIdx] === 0) {
      while (zeroArr[medianIdx] === 0) {
        medianIdx--;
      }
    }

    zeroArr = zeroArr.splice(medianIdx, lastIdx);
    lastIdx = zeroArr.length - 1;
    medianIdx = Math.floor(lastIdx / 2);
  }
  return zeroArr;
}

module.exports = countZeroes;
