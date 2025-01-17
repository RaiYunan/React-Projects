import { useState } from 'react'
import SideBar from './components/SideBar'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Favourites from './pages/Favourites'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
    <SideBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
    </Routes>
    </div>
  )
}

export default App
