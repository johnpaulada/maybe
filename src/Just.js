// @flow

import type { MaybeType, ToMaybe } from './types'

const Just = <T>(x: T) : MaybeType => ({
  value: () : T => x,
  reduce: (f: Function) : any => f(x),
  inspect: (f: Function) : MaybeType => console.log(`Just(${f(x)})`) || Just(f(x)),
  map: (f: Function) : MaybeType => Just(f(x)),
  ap: (fa: MaybeType) : MaybeType => Just(fa.reduce(a => a)(x)),
  chain: (f: ToMaybe) : MaybeType => Just(f(x).reduce(x => x)),
  branch: (_: Function, right: Function) : MaybeType => Just(right(x))
})

export default Just