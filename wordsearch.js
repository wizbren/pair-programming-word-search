const wordSearch = (letters, word) => { 
    let transposeLetters = [];

    if (!letters.length) return false;

    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        } 
        
    }

    
    transposeLetters = transpose(letters);

    
    const verticalJoin = transposeLetters.map(ls => ls.join(''));
    
    for (const arr of verticalJoin) {
        if (arr.includes(word)) {
            return true;
        } 
    }
    
    return false;
}


module.exports = wordSearch;


const transpose = function (matrix) {
    const transMatrix = [];
  
    for (let column = 0; column < matrix[0].length; column++) {
      let newRow = [];
  
      for (let row = 0; row < matrix.length; row++) {
        newRow.push(matrix[row][column]);
      }
      transMatrix.push(newRow);
    }
    return transMatrix;
  };