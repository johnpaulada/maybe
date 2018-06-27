import Just from './Just'
import Nothing from './Nothing'

const Maybe = {
  Just,
  Nothing,
  of: x => 
    typeof x !== 'undefined' && n !== null
      ? Just(x)
      : Nothing()
}

export default Maybe