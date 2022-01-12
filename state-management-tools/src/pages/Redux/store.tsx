import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'

const store = createStore(reducer)

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider