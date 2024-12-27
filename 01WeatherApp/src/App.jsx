import { useState } from 'react'
import Weather from './components/Weather'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weather/>
    </>
  )
}

export default App
