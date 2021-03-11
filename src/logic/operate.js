import Big from "big.js";

const operate = (numberOne, numberTwo, operation) => {
  const result = '';
  switch (operation) {
    case '-':
      {
        result = new Big(numberOne).minus(new Big(numberTwo));
      }
      break;

    case '÷':
      {
        if (numberTwo !== '0') {
          result = new Big(numberOne).div(new Big(numberTwo));
        } else {
          result = '∞';
        }
      }
      break;

    case 'X':
      {
        if (numberOne === null) {
          result = new Big(numberTwo).times(0.01);
        }
        if (numberOne === null && numberTwo === null) {
          result = new Big(numberOne).times(new Big(numberTwo));
        } else {
          result = new Big(numberOne).times(new Big(numberTwo).times(0.01));
        }
      }
      break;

    case '+':
      {
        result = new Big(numberOne).plus(new Big(numberTwo));
      }
      break;
  }

  return result;
};

export default operate;
