function countZeroes(arr) {
  let zeroArr = arr;

  while (zeroArr[0] != 0) {
    const arrLength = zeroArr.length - 1;
    const median = Math.floor(arrLength / 2);

    if (zeroArr[median] == 0) {
      zeroArr = zeroArr.slice(median, arrLength);
      return arrLength;
    } else {
      zeroArr = zeroArr.slice(median + 1, arrLength);
    }
  }
}

module.exports = countZeroes;
