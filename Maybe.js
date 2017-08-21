import Just from './Just'
import Nothing from './Nothing'

const Maybe = {
  of: x => x ? Just(x) : Nothing(x)
}

export default Maybe