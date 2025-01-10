import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const navigate=useNavigate();
    const [showPassword,setShowPassword]=useState(false);
    const [error,setError]=useState(false);

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

 

    const toggleVisibility=()=>{
        setShowPassword(!showPassword)
    }

    const handleLogin=()=>{
      const storedData=localStorage.getItem("userData");
      if(!email.trim() || !password.trim()){
        alert("Please fill all the fields!")
        return
      }
      if(storedData){
        try {
          const parsedData=JSON.parse(storedData);
          if(Array.isArray(parsedData)){
            const user=parsedData.find((data)=>data.email===email && data.password===password);
            if(user){
              alert("Login Successfully");
              navigate("/home");
            }else{
              
              setError(true);
              // setTimeout(() => {
              //   setError(false)
                
              // }, 1000);
            }
          }
          
        } catch (error) {
          
        }
      }  
    }


  return (
    <div className='max-w-[450px] mx-auto py-10'>
    {error &&  <div className='text-white bg-sky-500 px-4 py-2 text-3xl rounded-md mb-6 text-center'>Invalid Email or Password</div>}
      
       <h1 className='font-semibold text-3xl text-center mb-6'>Login</h1>
       <div className='flex gap-2 items-center pl-9'>
            <label htmlFor="">Email:</label>
            <input type="email" placeholder='' value={email} onChange={(e)=>setEmail(e.target.value)} className='border-[1.7px] p-2 rounded-sm border-slate-600 flex-grow my-4' />
        </div>
        <div className='flex gap-2 items-center pl-1'>
            <label htmlFor="">Password:</label>
            <div className='border-[1.7px] p-2 rounded-sm border-slate-600 flex w-full mb-3'>
            <input type="text" placeholder='' className='flex-grow outline-0' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={toggleVisibility}><FontAwesomeIcon icon={showPassword?faEyeSlash:faEye}/></button>
            </div>
            
        </div>
        <p className='mb-6'>Create an account? <Link className="text-purple-600 underline mt-3" to="/">SignUp</Link></p>
        <button className='bg-purple-700 text-white px-14 py-2 rounded-lg block mx-auto text-center' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
