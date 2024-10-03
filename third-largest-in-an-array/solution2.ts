/**
 *Algorithm 2 : Idea – Use one loop. Maintain three variable max, preMax and prePreMax such that max
 *will have the maximum value, preMax will have the second largest and prePreMax will have the third
 *largest value.
 */
 const findThirdLargest2 = (array: number[]) => {
    let max: number = -Infinity;
    let preMax: number = -Infinity;
    let prePreMax: number = -Infinity;
  
    for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
        prePreMax = preMax;
        preMax = max;
        max = array[i];
      } else if (preMax < array[i]) {
        prePreMax = preMax;
        preMax = array[i];
      } else if (prePreMax < array[i]) {
        prePreMax = array[i];
      }
    }
  
    return prePreMax;
  };
  
  console.log(findThirdLargest2([20, 2, 45, 12, 5]));
  