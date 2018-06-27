const Nothing = () => ({
  value: null,
  reduce: _ => null,
  inspect: _ => console.log(`Nothing`),
  map: _ => Nothing(), 
  ap: _ => Nothing(),
  chain: _ => Nothing()
})

export default Nothing