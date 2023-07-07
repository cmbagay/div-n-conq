function countZeroes(arr) {
  let zeroArr = arr;
  let lastIdx = zeroArr.length - 1;
  let medianIdx = Math.floor(lastIdx / 2);

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
/** 
[1, 1, 1, 1, 0, 0]
    let zeroArr = [1, 1, 1, 1, 0, 0]  > [1, 1, 0, 0]  > [1, 0, 0]
    let lastIdx = 5 > 3 > 0
    let medianIdx = 2 > 1 > 0
  
  while (zeroArr[0]!= 0) 1 && 1  > 1 && 1 >  0 && 0
    if(zeroArr[medianIdx] != 0){}
    else
    // zeroArr = [1, 1, 0, 0] > [1, 0, 0] 
    // lastIdx = 3  > 2 
    // medianIdx = 1  > 1 
  
  return zeroArr.splice(medianIdx, lastIdx);

[1, 0, 0, 0, 0]
    let zeroArr = [1, 0, 0, 0, 0]
    let lastIdx = 4
    let medianIdx = 2
  
  while (zeroArr[0] != 0 ) 1 && 0

    if(zeroArr[medianIdx] === 0){ [2] = 0 > [1] = 0 > [0] = 1
      while(zeroArr[medianIdx] === 0){ [2] = 0 
        medianIdx--; [1]  
      }
    }

    // zeroArr = [0, 0, 0, 0]
    // lastIdx = 
    // medianIdx = 

  return zeroArr 

[0, 0, 0]
[1, 1, 1, 1]
*/
