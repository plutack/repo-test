function moveZeros(numArray) {
  let j = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (j === numArray.length) {
      return numArray;
    }
    if (numArray[i] === 0) {
      while (numArray[j] === 0) {
        j++
      }
      numArray[i] = numArray[j];

      numArray[j] = 0;
    }
  }
  return numArray;
}

num = [0, 0, 1, 0, 3, 12, 0, 0]
console.log(moveZeros(num))


