export const isAnagram = (s: string, t: string) => {
  // If the lengths are different, they can't be anagrams
  if (s.length !== t.length) {
    return false;
  }

  // Create a frequency map for characters
  const charCount: { [key: string]: number } = {};

  // Increment for `s` and decrement for `t` in one loop
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1; // Count characters in `s`
    charCount[t[i]] = (charCount[t[i]] || 0) - 1; // Count characters in `t`
  }

  // Check if all counts are zero
  for (const count in charCount) {
    if (charCount[count] !== 0) {
      return false; // If any count is not zero, they're not anagrams
    }
  }

  return true; // If all counts are zero, they are anagrams
};


// Test cases
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
