import React, { useState } from 'react'
import data from '../data'

const UseState = () => {
  const thisTool = data.find((item) => item.title === 'useState')
  const [tool, setTool] = useState(thisTool ? thisTool.title : '⁉️')

  return (
    <div style={{ height: '600px' }} className="flex justify-center items-center">
      <div>
        <h1 className="text-2xl">{tool}</h1>
        <button className="mt-4" onClick={() => setTool(`${tool} is pretty cool ✨`)}>
          Update
        </button>
      </div>
    </div>
  )
}

export default UseState
