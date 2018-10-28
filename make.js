const make = (...args) => {
  if (args.length === 0) return 0;
  return (...next) => {
    if (typeof next[0] === 'function') {
      return args.reduce(next[0]);
    } else {
      return make.apply(null, [...args, ...next]);
    }
  }
}
               
const sum = (a, b) => a + b;

console.log(make(1)(2, 3)(4, 5)(6)(sum));
