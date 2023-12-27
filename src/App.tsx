// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import twaLogo from './assets/tapps.png'
// import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  // const [count, setCount] = useState(0)
  console.log(WebApp)

  return (
    <>
      <div>tg lizi 测试</div>
      
      <div>
        {
          WebApp?.initData && JSON.parse(WebApp?.initData)
        }
      </div>

      <button onClick={() => WebApp.showAlert('this is test showAlert')}>
        Show Alert
      </button>
    </>
  )
}

export default App
