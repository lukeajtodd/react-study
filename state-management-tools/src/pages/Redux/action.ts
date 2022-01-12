import { ActionKind } from './helpers' 

export const add = (value: string) => {
  return {
    value,
    type: ActionKind.Add
  }
}

export const remove = (value: string) => {
  return {
    value,
    type: ActionKind.Remove
  }
}