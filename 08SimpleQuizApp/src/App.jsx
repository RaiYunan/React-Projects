import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-[#6b21a8] to-[#8b5cf6]'>
        <Container/>
        
      </div>
    </>
  )
}

export default App
