import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>App component</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <Outlet />
    </div>
  )
}

export default App
