export enum ActionKind {
  Add = 'ADD',
  Remove = 'REMOVE'
}

export type State = {
  books: string[]
}

export type Action = {
  value: any,
  type: ActionKind
}