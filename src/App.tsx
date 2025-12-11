import './App.css'
import { Link, Outlet } from 'react-router'
import { useAppSelector, useAppDispatch } from './app/hooks'
import { increment, decrement } from './features/counter/counterSlice'



function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className='App'>
      <h1>App component</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <Outlet />

    </div>
  )
}

export default App
