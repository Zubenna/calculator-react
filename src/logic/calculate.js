import operate from './operate';

const calculate = ( calcData, buttonName ) => {
  let { total, next, operation } = calcData;
  const operators = [ '+', '-', '÷', 'X', '%'];
  if (buttonName === 'AC' || total === '∞') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }
}

export default calculate;