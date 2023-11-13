const sortNumbers = (numArray) => {
  if (numArray.length <= 1) {
    return numArray;
  }

  const pivot = numArray[0];
  const left = [];
  const right = [];

  for (let i = 1; i < numArray.length; i++) {
    const number = numArray[i];

    if (number < pivot) {
      left.push(number);
    } else {
      right.push(number);
    }
  }

  return sortNumbers(left).concat(pivot, sortNumbers(right));
};

const unorderedNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 11, 0];
const orderedNumbers = sortNumbers(unorderedNumbers);

console.log("Numeros Desordenados: ", unorderedNumbers);
console.log("Numeros Ordenados: ", orderedNumbers);
