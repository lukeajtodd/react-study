import React, { useState } from 'react'
import { ActionKind } from './helpers'
import { useRecoilState } from 'recoil'
import booksAtom from './store'

const RecoilPage = () => {
  const [ books, setBooks ]: [ string[], any ] = useRecoilState(booksAtom)
  const [ currentBook, setCurrentBook ] = useState('')

  const handleAction = (type: ActionKind) => {
    if (!currentBook) return

    switch (type) {
      case ActionKind.Add:
        setBooks([...books, currentBook])
        break
      case ActionKind.Remove:
        setBooks(books.filter(book => book !== currentBook))
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
        <h1 className="text-2xl mb-4">Recoil</h1>
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

export default RecoilPage
