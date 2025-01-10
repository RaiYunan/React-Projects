import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {index:true,element:<SignUp/>},
      { path:"login",element:<Login/>},
      {path:"home",element:<Home/>}
    ]
    },
   
])



function App() {
  

  return (
    <><RouterProvider router={router}/></>
  )
}

export default App
