function curry(callback) {
  if (callback.length === 1) {
    return callback;
  }
  return (...args) => {
    if (args.length < callback.length) return curry(callback.bind(null, ...args));
    return callback(...args);
  };
}

export { curry };
