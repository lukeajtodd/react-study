import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './action'
import { State, ActionKind } from './helpers'

const ReduxPage = () => {
  const books = useSelector((state: State) => state.books)
  const dispatch = useDispatch()

  const [ currentBook, setCurrentBook ] = useState('')

  const handleAction = (type: ActionKind) => {
    if (!currentBook) return

    switch (type) {
      case ActionKind.Add:
        dispatch(add(currentBook))
        break
      case ActionKind.Remove:
        dispatch(remove(currentBook))
        break
    }

    setCurrentBook('')
  }

  return (
    <div
      style={{ height: '600px' }}
      className="flex justify-center items-center"
    >
      <div>
        <h1 className="text-2xl mb-4">Redux</h1>
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
        <input type="text" value={currentBook} onChange={e => setCurrentBook(e.target.value)}/>
        <button onClick={() => handleAction(ActionKind.Add)}>Add</button>
        <button onClick={() => handleAction(ActionKind.Remove)}>Remove</button>
      </div>
    </div>
  )
}

export default ReduxPage
