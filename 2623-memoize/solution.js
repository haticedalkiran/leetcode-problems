/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
  let cache = new Map();

  return function (...args) {
    let arglist = JSON.stringify(args);

    if (cache.has(arglist)) {
      return cache.get(arglist);
    }

    const result = fn(...args);
    cache.set(arglist, result);
    return result;
  };
}
