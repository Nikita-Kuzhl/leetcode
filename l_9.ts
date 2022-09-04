const isPalindrome = (x: number) => {
  let reverseValue = Number(("" + x).split("").reverse().join(""));
  return reverseValue === x ? true : false;
};
console.log(isPalindrome(122));
