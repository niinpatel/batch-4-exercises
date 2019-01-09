function rectangleDiagonal(...args) {
  // prettier-ignore
  return args.reduce((a, b) => Math.sqrt((a ** 2) + (b ** 2)));
}

export { rectangleDiagonal };
