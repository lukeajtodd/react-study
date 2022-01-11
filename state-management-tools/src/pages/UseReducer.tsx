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
      if (tools.length == 0) return []

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
          {tools.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
        <button className="mt-4" onClick={popTool}>
          Pop
        </button>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Tool"
            value={newTool}
            onChange={(e) => setNewTool(e.target.value)}
          />
          <button className="mt-4" onClick={addTool}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer
