// @flow

import Just from './Just'

type MaybeType = {
  value: Function,
  reduce: Function,
  inspect: Function,
  map: Function,
  ap: Function,
  chain: Function,
  branch: Function
}

const Nothing = () : MaybeType => ({
  value: (v: any) : any => v,
  reduce: () : null => null,
  inspect: () : MaybeType => console.log(`Nothing`) || Nothing(),
  map: () : MaybeType => Nothing(),
  ap: () : MaybeType => Nothing(),
  chain: () : MaybeType => Nothing(),
  branch: (left: Function, _: Function) : MaybeType => Just(left())
})

export default Nothing