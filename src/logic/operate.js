import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  switch (operation) {
    case '-':
      result = new Big(numberOne).minus(new Big(numberTwo));
      break;
    case '÷':
      if (numberTwo !== '0') {
        result = new Big(numberOne).div(new Big(numberTwo));
      } else {
        result = '∞';
      }
      break;
    case '%':
      result = new Big(numberTwo).div(new Big(100));
      break;
    case 'x':
      if (numberOne === null) {
        result = new Big(numberTwo).times(0);
      }
      if (numberOne === null && numberTwo === null) {
        result = new Big(numberOne).times(new Big(numberTwo));
      } else {
        result = new Big(numberOne).times(new Big(numberTwo));
      }
      break;
    case '+':
      result = new Big(numberOne).plus(new Big(numberTwo));
      break;
    default:
      result = null;
  }

  let newResult = result.toFixed();
  if ((newResult.includes('.')) && newResult.length > 18) {
    newResult = result.toFixed(17);
  } else if (newResult.length > 18) {
    newResult = 'value too large';
  }
  return newResult;
};

export default operate;
