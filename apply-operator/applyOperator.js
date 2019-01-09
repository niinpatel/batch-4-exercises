
function applyOperator(operator, ...operands) {
  if(!operator){
    throw new Error('please specify an operator')
  }
  if(!operands.length){
    return 0
  }

  switch(operator){
    case '+':
      return operands.reduce((ac,cu) => ac+cu, 0);
    case '-':
      return operands.reduce((ac,cu) => ac-cu, 0);
    case '*':
      return operands.reduce((ac,cu) => ac*cu, 1);
    case '/':
      return Math.floor(operands.reduce((ac,cu) => ac/cu, operands[0]**2)*10000)/10000;
    case '%':
      return operands.reduce((ac,cu, i) => {
        if(i === 0){
        return cu;
        } 
        return ac%cu;
      });
  }
}

export {
  applyOperator,
};
