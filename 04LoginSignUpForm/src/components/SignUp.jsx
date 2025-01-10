import React,{useEffect, useState} from 'react'
import Logo from "../assets/Login.jpg"
import { Link,useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function SignUp() {
  const navigate=useNavigate();
  const [showPassword,setShowPassword]=useState(false);
  
  const [userDetails,setUserDetails]=useState({
    name:"",
    phone_no:"",
    email:"",
    password:""
  });

  const [data,setData]=useState([]);

  const handleInput=()=>{
    if(!userDetails.name || !userDetails.email || !userDetails.password || !userDetails.phone_no){
      alert("Please fill in all the fields!");
      return;
    }
    setData([...data,userDetails]);
    setUserDetails({
      name:"",
      phone_no:"",
      email:"",
      password:""

    })
    alert("SignUp Successfully")
    navigate("/login")
    

  }
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserDetails((prevState)=>({
      ...prevState,
      [name]:value
    }))


  }
  
  const toggleVisibility=()=>{
      setShowPassword(!showPassword)
      
  }

  useEffect(()=>{
    if(data.length>0){
      localStorage.setItem("userData",JSON.stringify(data))
    }

  },[data])

  useEffect(()=>{
    const storedData=localStorage.getItem("userData");
    if(storedData){
      try {
        const parsedData=JSON.parse(storedData);
        if(Array.isArray(parsedData)){
          setData(parsedData);
        }else{
          setData([]);
        }
        
      } catch (error) {
        console.error("Error parsing stored data:", error);
        setData([]);
        localStorage.removeItem("userData");

        
      }
    }

  },[])

 
  return (
    <div className='flex max-w-fit mx-auto gap-10'>
      <div className='w-[450px] py-16 flex flex-col gap-4'>
        <h1 className='font-semibold text-3xl text-center'>Sign Up</h1>
        <div className='flex gap-2 items-center pl-9'>
            <label htmlFor="">Name:</label>
            <input type="text" name="name" placeholder='' value={userDetails.name} onChange={(e)=>handleChange(e)} className=' border-[1.7px] p-2 rounded-sm border-slate-600 flex-grow' />
        </div>
        <div className='flex gap-2 items-center pl-1'>
            <label htmlFor="">Phone No:</label>
            <input type="text" name="phone_no" placeholder='' value={userDetails.phone_no} onChange={(e)=>handleChange(e)} className=' border-[1.7px] p-2  rounded-sm border-slate-600 flex-grow' />
        </div>

        <div className='flex gap-2 items-center pl-9'>
            <label htmlFor="">Email:</label>
            <input type="email" name="email" placeholder='' value={userDetails.email} onChange={(e)=>handleChange(e)} className='border-[1.7px] p-2 rounded-sm border-slate-600 flex-grow'/>
        </div>
        <div className='flex gap-2 items-center pl-1'>
                    <label htmlFor="">Password:</label>
                    <div className='border-[1.7px] p-2 rounded-sm border-slate-600 flex w-full mb-3'>
                    <input type={showPassword?"text":"password"} name="password" value={userDetails.password} onChange={(e)=>handleChange(e)} placeholder='' className='flex-grow outline-0'/>
                    <button onClick={toggleVisibility}><FontAwesomeIcon icon={showPassword?faEyeSlash:faEye}/></button>
                    </div>
                    
        </div>
        <p>Already have an account? <Link className="text-purple-600 underline" to="/login">Login</Link></p>
        <button className='bg-purple-700 text-white px-14 py-2 rounded-lg block mx-auto text-center' onClick={handleInput}>Sign Up</button>
      </div>
      <div className='flex items-center'>
        <img src={Logo} alt="" className='w-[450px] ' />
      </div>
    </div>
  )
}

export default SignUp
