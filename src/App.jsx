import React from 'react'
import Dashboard from './Dashboard'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div >
    <BrowserRouter>
      <Dashboard/>
      </BrowserRouter>
    </div>
  )
}

export default App