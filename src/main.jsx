import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ❌ remove this if it exists:
// import './index.css'

// ✅ only keep this:
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
