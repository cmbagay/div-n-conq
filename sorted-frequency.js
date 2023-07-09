function sortedFrequency(arr, num) {
  let freqArr = arr;

  //medianIdx
  let medianIdx = Math.floor(arr.length / 2);

  if (freqArr[medianIdx] === 3) {
    while (freqArr[medianIdx - 1] === 3) {
      medianIdx--;
    }
  } else {
    while (freqArr[medianIdx] != num) {
      medianIdx++;
    }
  }

  //lastIdx === 2
  let lastIdx = freqArr.length - 1;
  while (freqArr[lastIdx] != num) {
    if (freqArr[lastIdx] != num) {
      lastIdx--;
    }
  }

  freqArr.splice(medianIdx, LastIdx);
}

module.exports = sortedFrequency;

/**
 * ([1,1,2,2,2,2,3],2)
  let freqArr = arr; [1,1,2,2,2,2,3]    

  //medianIdx === 
  let medianIdx = Math.floor(lastIdx / 2); 3   
  if(freqArr[medianIdx] === num) [3] = num >
    while(freqArr[medianIdx - 1] === num)
      medianIdx--;
      
  //lastIdx === 2
  let lastIdx = freqArr.length - 1; 6 > 5    
  while (freqArr[lastIdx] != num)  [6] = 3 > [5] = 2
    if (freqArr[lastIdx] != num) 3 != num                
      lastIdx--;  5 
 
  return freqArr

 * ([1,1,2,2,2,2,3],3)
  let freqArr = arr; [1,1,2,2,2,2,3]    

  //medianIdx 
  let medianIdx = Math.floor( 7 / 2); 3
  if(freqArr[medianIdx] === 3) [3] === 2
    while(freqArr[medianIdx - 1] === 3)
      medianIdx--;

  else{ 
    while(freqArr[medianIdx] != num){ [3] == 2 > [4] > [5] > [6]
      medianIdx++; \
    }}
      
  //lastIdx
  let lastIdx = freqArr.length - 1;    
  while (freqArr[lastIdx] != 3) 
    if (freqArr[lastIdx] != 3)                 
      lastIdx--;   
 
  return freqArr.splice(medianIdx,LastIdx)

 * ([1,1,2,2,2,2,3],1)
 * ([1,1,2,2,2,2,3],4)
 */
