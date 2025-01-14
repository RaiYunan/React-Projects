import { useState } from 'react'
import Header from './components/Header'
import NotesList from './components/NotesList'


function App() {


  return (
    <div  className='w-full min-h-screen text-white bg-gray-800'>
     <div>
      <Header/>
      <NotesList/>

     </div>
     </div>
  
  )
}

export default App
