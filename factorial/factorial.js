
function factorial(num) {
  let fact = 1;
  while (num > 1) {
    fact *= num;
    num--;
  }
  return fact
}

export {
  factorial,
};
