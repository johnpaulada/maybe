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

type LibType = {|
  Just : ToMaybe,
  Nothing : ToMaybe,
  of: ToMaybe
|}

export type {
    MaybeType,
    ToMaybe,
    LibType
}