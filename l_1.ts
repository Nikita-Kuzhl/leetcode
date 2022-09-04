const twoSum = (nums: number[], target: number) => {
  let result: any = [];
  let index_map = new Map();
  nums.forEach((item, index) => {
    let difference = target - item;
    if (index_map.has(difference)) {
      result[0] = index;
      result[1] = index_map.get(difference);
      return;
    } else {
      index_map.set(item, index);
    }
  });
  return result;
};
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 7, 11, 15], 9));
