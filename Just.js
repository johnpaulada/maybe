const Just = x => ({
  value: x,
  reduce: f => f(x),
  inspect: f => console.log(`Just(${f(x)})`),
  map: f => Just(f(x)),
  ap: fa => Just(fa.reduce(a => a)(x)),
  chain: f => Just(f(x).reduce(x => x))
})

export default Just