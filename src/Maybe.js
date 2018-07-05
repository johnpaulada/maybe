// @flow

import Just from './Just'
import Nothing from './Nothing'

import type { MaybeType, ToMaybe, LibType } from './types'

const Maybe : LibType = {
  Just,
  Nothing,
  of: (x : any) : MaybeType => 
    typeof x !== 'undefined' && x !== null
      ? Just(x)
      : Nothing()
}

export default Maybe