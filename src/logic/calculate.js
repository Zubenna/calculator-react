
const calculate = ( calcData, buttonName ) => {

    switch(buttonName){
        case '+/-':
          {
            calcData.total *= -1;
            calcData.next *= -1;
            calcData.operation = '';
          }
          break;

        case '-':
          {
            calcData.total -= calcData.next
            calcData.operation = '';
          }
          break;

        case '+':
          {
            calcData.total += calcData.next
            calcData.operation = '';
          }
          break;
          
        case 'X':
          {
            calcData.total *= calcData.next
            calcData.operation = '';
          }
          break;

        case '÷':
          {
            calcData.total /= calcData.next
            calcData.operation = '';
          }
          break;

        case '%':
          {
            calcData.total %= calcData.next
            calcData.operation = '';
          }
          break;
    }
}

export default calculate;