const Nothing = () => ({
  value: null,
  reduce: f => null,
  inspect: f => console.log(`Nothing()`),
  map: f => Nothing(), 
  ap: f => Nothing(),
  chain: f => Nothing()
})

export default Nothing