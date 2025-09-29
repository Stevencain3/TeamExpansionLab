import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// this is the main entry point for the React app
// it finds the <div id="root"> in index.html
// and tells React to render our App component inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* StrictMode just helps catch issues during development */}
    <App />
  </React.StrictMode>,
)
