import { useState } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is `)}>
            Show Alert
        </button>
      </div>
    </>
  )
}

export default App
