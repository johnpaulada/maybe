const Nothing = () => ({
  value: null,
  reduce: f => null,
  inspect: f => console.log(`Nothing(${f(x)})`),
  map: f => Nothing(), 
  ap: f => Nothing(),
  chain: f => Nothing()
})

export default Nothing