import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import reducer from './data/reducer.js'
import { createStore } from 'redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={createStore(reducer)}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
