
function cacheFunction(fun) {
 let cache = {}
  return (val) => {
    if (cache.hasOwnProperty(val)) {
      return cache[val]
    } else {
      cache[val] = fun(val)
      return cache[val]
    }
  }
}

export {
  cacheFunction,
}
