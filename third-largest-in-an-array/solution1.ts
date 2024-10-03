/**
 *Algorithm 1 : Idea – Use three loops one after another. First loop will find Max. Second loop will find
 *Second Max, Third loop will find third max. Note that it is possible First max == second Max == Third Max
 *as in 7, 20, 18, 4, 20, 19, 20, 3.and your program should return 20 in this case.
 */

 const findThirdLargest1 = (array: number[]): number => {
    const tempArray = [...array];
  
    let max: number = tempArray[0];
    let index: number = 0;
  
    for (let i = 0; i < tempArray.length; i++) {
      if (max < tempArray[i]) {
        max = tempArray[i];
        index = i;
      }
    }
  
    tempArray.splice(index, 1);
    max = tempArray[0];
  
    for (let i = 0; i < tempArray.length; i++) {
      if (max < tempArray[i]) {
        max = tempArray[i];
        index = i;
      }
    }
  
    tempArray.splice(index, 1);
    max = tempArray[0];
  
    for (let i = 0; i < tempArray.length; i++) {
      if (max < tempArray[i]) {
        max = tempArray[i];
        index = i;
      }
    }
  
    return max;
  };


  console.log(findThirdLargest1([20, 2, 45, 12, 5]));
