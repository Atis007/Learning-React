/**
 * returns minimum and maximum from an array of numbers
 *
 * @param {number[]} arr array of numbers
 * @returns {Array<Number>} [min, max] tuple
 */
const findMinMax = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError(`Argument must be an array, got ${typeof arr}.`); // Fixed quotes to backticks for template literal
  }
  if (arr.length === 0) {
    throw new RangeError("Array must not be empty."); //Checking for empty array, added this condition
  }

  let min = arr[0]; // Fixed initialization of min, in the original code it was undefined
  let max = arr[0];

    for (const value of arr) { // for..of loop, with this loop we can iterate directly over the values of the array, and no need to access arr[i] every time
      if (typeof value !== "number" || Number.isNaN(value)) {
        // Fixed isNaN function name
        throw new TypeError(`Array must only contain numbers, got ${value}.`); // Fixed quotes to backticks for template literal
      }

      if (value < min) {
        // Fixed comparison '<' instead of '>'
        min = value;
      } else if (value > max) {
        // Fixed comparison '>' instead of '<'
        max = value;
      }
    }
  return [min, max];
};

sampleArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(findMinMax(sampleArray));
