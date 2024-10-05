function mergeSort(A: number[]): number[] {
  // If the array has 1 or no element, it's already sorted
  if (A.length <= 1) {
    return A;
  }

  // Split the array into two halves
  const mid = Math.floor(A.length / 2);
  const left = mergeSort(A.slice(0, mid));
  const right = mergeSort(A.slice(mid));

  // Merge the two sorted halves
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  let sortedArray: number[] = [];
  let i = 0,
    j = 0;

  // Merge elements from both arrays into a sorted order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  // If there are remaining elements in the left array, add them
  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  // If there are remaining elements in the right array, add them
  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }

  return sortedArray;
}

// Example usage
const A = [4, 1, 3, 9, 7];
const sortedArray = mergeSort(A);
console.log(sortedArray); // Output: [1, 3, 4, 7, 9]

function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
