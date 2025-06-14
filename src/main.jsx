import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css';
import App from './App.jsx'
import ThemeProvider from './context/ThemeContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
)