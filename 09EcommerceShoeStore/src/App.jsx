import { useState } from 'react'
import {data} from "../src/data/data.jsx"
import SideBar from './components/SideBar.jsx'
import NavBar from './components/NavBar.jsx'
import Recommended from './components/Recommended.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full min-h-screen flex'>
      <SideBar/>
      {/*NavBar*/}
      <div className='flex-1'>
      <NavBar/>
      <Recommended/>
      </div>      
    
    </div>
      </>
  )
}

export default App
