import * as React from 'react'
import { useToolsContext, ActionKind } from '../helpers/Context'

const UseContext = () => {
  const { state: tools, dispatch, newTool, setNewTool } = useToolsContext()

  const addTool = () => {
    dispatch({ payload: newTool, type: ActionKind.Add })
    setNewTool('')
  }

  const popTool = () => {
    dispatch({ payload: '', type: ActionKind.Pop })
  }

  return (
    <div
      style={{ height: '600px' }}
      className="flex justify-center items-center"
    >
      <div>
        <h1 className="text-2xl mb-4">Context</h1>
        <ul>
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
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

export default UseContext