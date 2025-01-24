import { useState } from 'react'
import Header from './components/Header'
import MovieDetails from './components/MovieDetails'
import { MovieProvider } from './context/MovieContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MovieProvider>
     <Header/>
     <MovieDetails/>
    </MovieProvider>
  )
}

export default App
