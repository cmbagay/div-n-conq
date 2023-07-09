function findRotatedIndex(arr, num) {
  let lastIdx = arr.length - 1;
  let medianIdx = Math.floor(arr.length / 2);

  //find split
  //idx-1 compared to median to choose which
  if (arr[medianIdx - 1] - arr[medianIdx] != 1) {
    if (arr[medianIdx - 1] >= num) {
      while (arr[0] != num) {
        let rotatedArr = arr.splice(0, medianIdx - 1);
        medianIdx--;
      }
    }

    if (arr[medianIdx + 1] < num) {
      let rotatedArr = arr.splice(medianIdx + 1, medianIdx);
    }
  }
}

module.exports = findRotatedIndex;

/**
 * ([3,4,1,2],4)
  let lastIdx = arr.length - 1; 3
  let medianIdx = Math.floor(arr.length / 2); 2

  //find split
  if (arr[medianIdx - 1] - arr[medianIdx] != 1) 
    if (arr[medianIdx - 1] >= num) { 
      while(arr[0]!= num){let rotatedArr = arr.splice(0, medianIdx - 1); 
      medianIdx--;}
    }
    if (arr[medianIdx + 1] < num) {
      let rotatedArr = arr.splice(medianIdx + 1, medianIdx);
    }
  }
 * ([6, 7, 8, 9, 1, 2, 3, 4], 8)
 * ([6, 7, 8, 9, 1, 2, 3, 4], 3)
 * ([37,44,66,102,10,22],14)
 * ([6, 7, 8, 9, 1, 2, 3, 4], 12)
 */
