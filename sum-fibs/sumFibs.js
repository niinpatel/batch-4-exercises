function fib(n, memo) {
  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
function sumFibs(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    const fib_i = fib(i, { 0: 1, 1: 1 });
    if (fib_i > number) {
      break;
    }
    if (fib_i % 2 === 1) {
      sum += fib_i;
    }
  }
  return sum;
}

export { sumFibs };
