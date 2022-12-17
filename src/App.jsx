import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import phrases from './phrases.json'
import Phrase from './components/Phrase'

function App() {
  const [count, setCount] = useState(0)
 
  console.log(phrases)

  return (
    <div className="App">
     <Phrase />
    </div>
  )
}

export default App
