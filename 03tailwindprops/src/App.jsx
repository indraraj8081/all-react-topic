import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from "./component/card.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3 className='bg-green-400 text-black'>hello everyone</h3>
      <Card  / >
    </>
  )
}

export default App