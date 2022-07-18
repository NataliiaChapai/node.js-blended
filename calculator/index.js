console.log('Hello calculator');

const calculateNumbers = require('./lib/calc');
const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((str) => Number(str));


module.exports = calculateNumbers(operation, numbers);