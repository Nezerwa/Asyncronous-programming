function myReduce(cb, initial) {
  let results = initial ?? this[0];
  for (let i = initial == undefined ? 1 : 0; i < this.length; i++) {
    results = cb(results, this[i], i, this);
  }
  return results;
}

Array.prototype.myReduce = myReduce;
const numbers = [1, 2, 3, 4];

const sum = numbers.myReduce(
  (acc, curr) => {
    return acc + curr;
  },
  0
);

console.log(sum); // 10
