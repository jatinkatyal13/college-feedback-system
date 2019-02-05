export function ifeq(arg1, arg2, options) {
  if (arg1 === arg2) {
    return options.fn(this)
  } 
    return options.inverse(this)
  
}

export function ifcontains(arr, predicate, options) {
  arr = arr.split(',')
  for (const check of arr) {
    if (check === predicate) {
      return options.fn(this)
    }
  }
  return options.inverse(this)
}
