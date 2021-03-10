
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || !matrix.length) return []
  return matrix.reduce((accumulator, currentValue, idx) => {
    let isOdd = ( idx - 1 ) % 2;
    let value = !isOdd ? currentValue.reverse() : currentValue
    return [...accumulator, ...value]
  })
}
