import Just from './Just'
import Nothing from './Nothing'

const Maybe = {
  Just,
  Nothing,
  of: x => x ? Just(x) : Nothing()
}

export default Maybe