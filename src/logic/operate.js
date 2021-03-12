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
      result = new Big(numberTwo).div(100);
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
      result = '';
  }

  //   const newResult = validateResult(result);
  //   console.log(result);
  let y = result.toFixed();
  if ((y.includes('.')) && y.length > 18) {
    y = result.toFixed(17);
    // console('I am more tha 15');
  } else if (y.length > 18) {
    // y = y.slice(0, 16);
    y = 'value too large';
  }
  return y;
};

export default operate;
