const Nothing = x => ({
  value: x,
  inspect: f => console.log(`Nothing(${f(x)})`),
  map: f => Nothing(x)
})

export default Nothing