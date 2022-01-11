import * as React from 'react'
import data from '../data'

type State = string[]
type Dispatch = (action: any) => void
enum ActionKind {
  Add = 'ADD',
  Pop = 'POP',
}
type Action = {
  type: ActionKind
  payload: string
}

const ToolsContext = React.createContext<
  { state: State, dispatch: Dispatch, newTool: string, setNewTool: React.Dispatch<React.SetStateAction<string>> } | undefined
>(undefined)

const toolReducer: React.Reducer<State, Action> = (tools: string[], action) => {
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

type PropTypes = {
  children: React.ReactNode
}

function ToolsProvider({ children }: PropTypes) {
  const [newTool, setNewTool] = React.useState('')
  const [state, dispatch] = React.useReducer(toolReducer, data.map(item => item.title))

  return (
    <ToolsContext.Provider value={{ state, dispatch, newTool, setNewTool }}>
      {children}
    </ToolsContext.Provider>
  )
}

const useToolsContext = () => {
  const context = React.useContext(ToolsContext)
  if (context === undefined) {
    throw new Error("useToolsCount must be used within a CountProvider")
  }
  return context
}

export { ToolsProvider, useToolsContext, ActionKind }