function sumOfMultiple(limit: number): number {
  // Your code goes here
  let arr: number[] = [];
  for (let i: number = 0; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
}

module.exports = sumOfMultiple;
