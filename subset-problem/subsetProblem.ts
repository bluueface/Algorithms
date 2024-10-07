/**
 * Function to determine if a subset sum exists (True/False)
 * @param nums Array of numbers
 * @param target Target sum
 */
function subsetSumExists(nums: number[], target: number): boolean {
  const dp: boolean[] = Array(target + 1).fill(false);
  dp[0] = true; // Base case: sum 0 is always possible

  for (let num of nums) {
    for (let sum = target; sum >= num; sum--) {
      dp[sum] = dp[sum] || dp[sum - num];
    }
  }

  return dp[target];
}

/**
 * Function to find one subset that sums up to the target (if exists)
 * @param nums Array of numbers
 * @param target Target sum
 */
function findOneSubset(nums: number[], target: number): number[] | null {
  const dp: boolean[] = Array(target + 1).fill(false);
  const parent: number[] = Array(target + 1).fill(-1);
  dp[0] = true; // Base case

  for (let num of nums) {
    for (let sum = target; sum >= num; sum--) {
      if (dp[sum - num]) {
        dp[sum] = true;
        parent[sum] = num; // Track the number used to reach this sum
      }
    }
  }

  if (!dp[target]) return null; // No solution

  // Backtrack to find the subset
  const result: number[] = [];
  let sum = target;
  while (sum > 0) {
    result.push(parent[sum]);
    sum -= parent[sum];
  }

  return result;
}

/**
 * Function to find all subsets that sum up to the target
 * @param nums Array of numbers
 * @param target Target sum
 */
function findAllSubsets(nums: number[], target: number): number[][] {
  const result: number[][] = [];

  function backtrack(remaining: number, start: number, path: number[]) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      if (nums[i] <= remaining) {
        path.push(nums[i]);
        backtrack(remaining - nums[i], i + 1, path);
        path.pop(); // Backtrack
      }
    }
  }

  backtrack(target, 0, []);
  return result;
}

// Test cases
const nums = [3, 34, 4, 12, 5, 2];
const target = 9;

// (a) T or F
console.log("Subset exists:", subsetSumExists(nums, target));

// (b) One solution
const oneSolution = findOneSubset(nums, target);
console.log("One subset:", oneSolution ? oneSolution : "No solution");

// (c) All solutions
const allSolutions = findAllSubsets(nums, target);
console.log(
  "All subsets:",
  allSolutions.length > 0 ? allSolutions : "No solutions"
);
