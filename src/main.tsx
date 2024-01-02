import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import '../shims.d.ts'
declare const window: any;

import WebApp from '@twa-dev/sdk'

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter  basename={`/vite-boilerplate/`}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
