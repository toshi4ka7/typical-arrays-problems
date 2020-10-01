
exports.min = function min (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  return array.sort((a,b) => b - a).pop();
}

exports.max = function max (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  return array.sort((a,b) => a - b).pop();
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  return array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
}
