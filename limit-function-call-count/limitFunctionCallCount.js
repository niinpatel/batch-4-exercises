function limitFunctionCallCount(callback, maxCalls) {
  let calls = 0;
  return (...args) => {
    calls += 1;
    if (calls >= maxCalls) {
      return null;
    }
    return callback(...args);
  };
}

export { limitFunctionCallCount };
