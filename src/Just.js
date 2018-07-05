// @flow

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

const Just = (x: any) : MaybeType => ({
  value: () : any => x,
  reduce: (f: Function) : any => f(x),
  inspect: (f: Function) : MaybeType => console.log(`Just(${f(x)})`) || Just(f(x)),
  map: (f: Function) : MaybeType => Just(f(x)),
  ap: (fa: MaybeType) : MaybeType => Just(fa.reduce(a => a)(x)),
  chain: (f: ToMaybe) : MaybeType => Just(f(x).reduce(x => x)),
  branch: (_: Function, right: Function) : MaybeType => Just(right(x))
})

export default Just