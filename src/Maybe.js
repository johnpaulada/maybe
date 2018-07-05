// @flow

import Just from './Just'
import Nothing from './Nothing'

type MaybeType = {|
  value: Function,
  reduce: Function,
  inspect: Function,
  map: Function,
  ap: Function,
  chain: Function,
  branch: Function
|}

type ToMaybe = any => MaybeType

type LibType = {|
  Just : ToMaybe,
  Nothing : ToMaybe,
  of: ToMaybe
|}

const Maybe : LibType = {
  Just,
  Nothing,
  of: (x : any) : MaybeType => 
    typeof x !== 'undefined' && x !== null
      ? Just(x)
      : Nothing()
}

export default Maybe