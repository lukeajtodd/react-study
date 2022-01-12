import React, { useState, useReducer, Reducer } from 'react'
import data from '../data'

type State = string[]
enum ActionKind {
  Add = 'ADD',
  Pop = 'POP',
}
type Action = {
  type: ActionKind
  payload: string
}

const toolReducer: Reducer<State, Action> = (tools: string[], action) => {
  const { payload: tool, type } = action

  switch (type) {
    case ActionKind.Add:
      if (!tool) return tools
      
      return [...tools, tool]
    case ActionKind.Pop:
      if (tools.length === 0) return []

      const clone = [...tools]
      clone.pop()
      return clone
    default:
      return tools
  }
}

const UseReducer = () => {
  const [newTool, setNewTool] = useState('')
  const [tools, interactTools] = useReducer(toolReducer, data.map(item => item.title))

  const addTool = () => {
    interactTools({ payload: newTool, type: ActionKind.Add })
    setNewTool('')
  }

  const popTool = () => {
    interactTools({ payload: '', type: ActionKind.Pop })
  }

  return (
    <div
      style={{ height: '600px' }}
      className="flex justify-center items-center"
    >
      <div>
        <h1 className="text-2xl mb-4">useReducer</h1>
        <ul>
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4" onClick={popTool}>
          Pop
        </button>
        <div className="mt-4">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Tool"
            value={newTool}
            onChange={(e) => setNewTool(e.target.value)}
          />
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4" onClick={addTool}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer
