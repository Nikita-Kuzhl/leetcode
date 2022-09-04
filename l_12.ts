const Roman = [
  { symbol: "I", value: 1 },
  { symbol: "V", value: 5 },
  { symbol: "X", value: 10 },
  { symbol: "L", value: 50 },
  { symbol: "C", value: 100 },
  { symbol: "D", value: 500 },
  { symbol: "M", value: 1000 },
];

const romanToInt = (s: string) => {
  let arr = s.split("");
  let result: number = 0;
  arr.forEach((value, index, arr) => {
    let valueRoman = Roman.filter((i) => i.symbol === value);
    if (index > 0 && arr[index - 1] === "I") {
      return (result -= 1);
    }
    result += valueRoman[0].value;
  });
  return result;
};
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
