import React from 'react'
import MainRoutes from './routes/MainRoutes'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <MainRoutes />
    </div>
  )
}

export default App