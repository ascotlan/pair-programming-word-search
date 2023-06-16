const wordSearch = (letters, word) => {
  // if array not empty check for word
  if (!letters.length) {
    return false;
  } else if (horizontal(letters, word)) {
    return true;
  } else if (horizontal(transpose(letters), word)) {
    return true;
  } else {
    return false;
  }
};

// horizontal scan backwards & forward
const horizontal = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));

  for (const l of horizontalJoin) {
    if (l.includes(word) || reverse(l).includes(word)) {
      return true;
    }
  }
  return false;
};

// transpose matrix
const transpose = function(matrix) {
  //1. get length of rows in matrix
  const numberOfRows = matrix.length;

  //2. get length of columns in matrix
  const numberOfColumns = matrix[0].length;

  //3. initialize a transposedMatrix array
  let transposedMatrix = [];

  //4. start looping from row = 0; row < number of columns in matrix; row++
  for (let row = 0; row < numberOfColumns; row++) {
    //5. initialize a rowArr = []
    let rowArr = [];
    //6. start looping from column = 0; column < number of rows in matrix; column++
    for (let column = 0; column < numberOfRows; column++) {
      //7. rowArr.push(matrix[column][row])
      rowArr.push(matrix[column][row]);
    }
    //8. transposedMatrix.push(rowArr);
    transposedMatrix.push(rowArr);
  }
  //9. return transposedMatrix
  return transposedMatrix;
};

//reverse a string
const reverse = function(str) {
  return str.split("").reverse().join("");
};

module.exports = wordSearch;
