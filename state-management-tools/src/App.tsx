import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import UseState from './pages/UseState'

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
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<UseState />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
