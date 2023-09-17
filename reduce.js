function myReduce(cb, initial) {
  let result = initial ?? this[0];
  for (let i = initial == undefined ? 1 : 0; i < this.length; i++) {
    result = cb(result, this[i], i, this);
  }
  return result;
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
