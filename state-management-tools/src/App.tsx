import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import UseState from './pages/UseState'
import UseReducer from './pages/UseReducer'
import UseContext from './pages/UseContext'

import ReduxProvider from './pages/Redux/store'
import Redux from './pages/Redux'

import Recoil from './pages/Recoil'
import { RecoilRoot } from 'recoil'

import { ToolsProvider } from './helpers/Context'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <div>
              <ul className="flex p-8 bg-gradient-to-tr from-indigo-600 to-purple-600 justify-between">
                <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
                  <Link to="/">useState</Link>
                </li>
                <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
                  <Link to="/use-reducer">useReducer</Link>
                </li>
                <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
                  <Link to="/use-context">Context</Link>
                </li>
                <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
                  <Link to="/redux">Redux</Link>
                </li>
                <li className="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
                  <Link to="/recoil">Recoil</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<UseState />} />
            <Route path="/use-reducer" element={<UseReducer />} />
            <Route path="/use-context" element={<ToolsProvider><UseContext /></ToolsProvider>} />
            <Route path="/redux" element={<ReduxProvider><Redux /></ReduxProvider>} />
            <Route path="/recoil" element={<RecoilRoot><Recoil /></RecoilRoot>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
