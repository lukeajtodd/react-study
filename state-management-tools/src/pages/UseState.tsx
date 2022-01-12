import React, { useState } from 'react'
import data from '../data'

const UseState = () => {
  const thisTool = data.find((item) => item.title === 'useState')
  const [tool, setTool] = useState(thisTool ? thisTool.title : '⁉️')

  return (
    <div style={{ height: '600px' }} className="flex justify-center items-center">
      <div>
        <h1 className="text-2xl">{tool}</h1>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4" onClick={() => setTool(`${tool} is pretty cool ✨`)}>
          Update
        </button>
      </div>
    </div>
  )
}

export default UseState
