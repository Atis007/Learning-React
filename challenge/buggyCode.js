/**
 * returns minimum and maximum from an array of numbers
 * 
 * @param {Array<Number>} arr array of numbers
 * @returns {Array<Number>} [min, max] tuple
 */
const findMinMax = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("Argument must be an array, got ${typeof arr}.");
  }
  let min,
    max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i], 10) == NaN) {
      throw new TypeError("Array must only contain numbers, got ${arr[i]}.");
    }

    if (arr[i] > min) {
      min = arr[i];
    } else if (arr[i] < max) {
      max = arr[i];
    }
  }
  return [min, max];
};

array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(findMinMax(array)); //should output [1, 9]