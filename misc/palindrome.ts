const isPalindrome = (s: string) => {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left++] !== s[right--]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("morrom"));



