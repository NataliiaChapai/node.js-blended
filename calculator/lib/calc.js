function calculateNumbers(operation, numbers) {
    let result = null;
switch (operation) {
  case "sum":
    result = numbers.reduce((total, el) => total + el, 0);
    break;
  case "sub":
    result = numbers.reduce((total, el) => total - el);
    break;
  case "mult":
    result = numbers.reduce((total, el) => total * el);
    break;
  case "mult":
    result = numbers.reduce((total, el) => total / el);
    break;
  default:
    break;
}
return result;
}

module.exports = calculateNumbers;