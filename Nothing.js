import Just from './Just'

const Nothing = () => ({
  value: v => v,
  reduce: _ => null,
  inspect: _ => console.log(`Nothing`) || Nothing(),
  map: _ => Nothing(), 
  ap: _ => Nothing(),
  chain: _ => Nothing(),
  branch: (left, _) => Just(left())
})

export default Nothing