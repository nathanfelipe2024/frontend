import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntroComponent from './Components/IntroComponent'
import EventComponent from './Components/EventComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Fundamentos do React.js</h3>
      <IntroComponent />
      <EventComponent />
    </> 
  )
}

export default App
