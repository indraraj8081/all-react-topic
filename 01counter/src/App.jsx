import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter]=useState(0)

  // let counter =10
const addValue = ()=> {
  // counter = counter + 1
  setCounter(prevcounter => prevcounter+1)
  setCounter(prevcounter =>prevcounter +1)
  console.log("value added" , counter);
}

const removevalue = () => {
  setCounter(counter -1)
}

  return (
    <>
      <h1>chai aur react</h1>
      <h3>counter value = {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removevalue}>remove value ={counter}</button>
    </>
  )
}

export default App
