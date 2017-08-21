import Nothing from './Nothing'

const Just = x => ({
  value: x,
  inspect: f => console.log(`Just(${f(x)})`),
  map: f => {
    const fx = f(x)
    return fx ? Just(fx) : Nothing(fx)
  }
})

export default Just