const Just = x => ({
  value: _ => x,
  reduce: f => f(x),
  inspect: f => console.log(`Just(${f(x)})`) || Just(f(x)),
  map: f => Just(f(x)),
  ap: fa => Just(fa.reduce(a => a)(x)),
  chain: f => Just(f(x).reduce(x => x)),
  branch: (_, right) => Just(right(x))
})

export default Just