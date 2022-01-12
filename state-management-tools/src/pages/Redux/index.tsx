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
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={currentBook} onChange={e => setCurrentBook(e.target.value)}/>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleAction(ActionKind.Add)}>Add</button>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleAction(ActionKind.Remove)}>Remove</button>
      </div>
    </div>
  )
}

export default ReduxPage
