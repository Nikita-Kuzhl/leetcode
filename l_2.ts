const addTwoNumbers = (l1: number[] | null, l2: number[] | null) => {
  let value1 = Number(l1?.reverse().join(""));
  let value2 = Number(l2?.reverse().join(""));
  let sumArr = value1 + value2;
  return ("" + sumArr).split("").map(Number).reverse();
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
