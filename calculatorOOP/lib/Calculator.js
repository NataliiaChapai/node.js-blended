class Calculator {

  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }

  // helloRoman() {
  //   return 'Hello Roma'
  // }

  // vita = { name: "Vita", status: "admin"}
  // roma = ['bear', 'pizza']

  init = () => {
    return this.calculateNumbers(this.operation, this.numbers);
  }

  calculateNumbers(operation, numbers) {
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
}

const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((str) => Number(str));

module.exports = new Calculator(operation, numbers).init();

