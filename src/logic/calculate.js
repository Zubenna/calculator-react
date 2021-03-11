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
  } else if (operators.includes(buttonName)) {
    if (buttonName === '%') {
      if (!next) {
        next = total;
      }
      operation = buttonName;
      total = operate(null, next, operation);
      next = null;
      operation = null;
    } else if (total && next && operation ) {
      total = operate(total, next, operation);
      operation = buttonName;
      next = null;
    } else if (next && !operation) {
      total = next;
      operation = buttonName;
      next - null;
    } else {
      operation = buttonName;
    }
  }

}

export default calculate;