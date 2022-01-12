import { ActionKind, Action, State } from './helpers'

const reducer = (state: State = { books: []}, action: Action) => {
  switch (action.type) {
    case ActionKind.Add:
      return {
        books: [...state.books, action.value]
      }
    case ActionKind.Remove:
      return {
        books: state.books.filter(book => book !== action.value)
      }
    default:
      return state
  }
}

export default reducer