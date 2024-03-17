const removeFromArray = function(arr, ...values) {
  return arr.filter(elem => {
    if (!values.includes(elem)) return elem
  })
};

// Do not edit below this line
module.exports = removeFromArray;
