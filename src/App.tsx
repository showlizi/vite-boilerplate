// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import twaLogo from './assets/tapps.png'
// import viteLogo from '/vite.svg'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css'
import Home from './views/Home'
import Earn from './views/Earn'
import Wallet from './views/Wallet'

import WebApp from '@twa-dev/sdk'

// function App() {
//   // const [count, setCount] = useState(0)
//   console.log(WebApp)

//   return (
//     <>
//       <div>tg lizi 测试</div>
      
//       <div>
//         {
//           WebApp?.initData
//         }
//       </div>

//       <button onClick={() => WebApp.showAlert('this is test showAlert')}>
//         Show Alert
//       </button>
//     </>
//   )
// }

function Layout() {
  return (
    <>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </>
  );
}



function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0)
  // console.log(WebApp)

  return (
    <>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="earn" element={<Earn />} />
          <Route path="wallet" element={<Wallet />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}


export default App
