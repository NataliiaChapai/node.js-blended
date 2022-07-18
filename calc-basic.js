//sum
//sub
//mult
//div

const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((str) => Number(str));

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

console.log(result);
