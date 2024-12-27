import React, { useEffect, useState } from 'react'
import buttonBg from '../assets/images/search.png'
import clearImg from '../assets/images/clear.png';
import cloudImg from '../assets/images/cloud.png';
import drizzleImg from '../assets/images/drizzle.png';
import humidityImg from '../assets/images/humidity.png';
import rainImg from '../assets/images/rain.png';
import snowImg from '../assets/images/snow.png';
import windImg from '../assets/images/wind.png';



function Weather() {

    const [weatherImg,setWeatherImg]=useState(clearImg);
    const [city,setCity]=useState("Dharan");
    const[degree,setDegree]=useState("");
    const [humidity,setHumidity]=useState("");
    const [windSpeed,setWindspeed]=useState("");
    const [input,setInput]=useState("");

    function CheckWeather(weather){
        console.log(weather);
        if(weather=="Clouds"){
            setWeatherImg(cloudImg);
        }else if(weather=="Clear"){
            setWeatherImg(clearImg);
        }else if(weather=="Rain"){
            setWeatherImg(rainImg)
        }else if(weather=="Drizzle"){
            setWeatherImg(drizzleImg)
        }else if(weather=="Snow"){
            setWeatherImg(snowImg)
        }

    }

    const displayData=(data)=>{
        setDegree(Math.floor(data.main.temp-273));
        setHumidity(data.main.humidity)
        setWindspeed(data.wind.speed)
        setCity(data.name);
        setInput("");
        CheckWeather(data.weather[0].main);

    }


    
    
    async function fetchData(cityName){
        cityName=cityName.trim();
        if(cityName==""){
            alert("Enter City Name");
            return;
        }
       try {
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=85cb48b2e20fdcb89097aa331af09cc1`);

        if (!response.ok){
            alert("City not found!!")
            
        }
        const data=await response.json();
        displayData(data);
        console.log(data);
    
       } catch (error) {
          console.log(error)
       }
        
    }
    useEffect(()=>{

       
        fetchData(city);

    },[])

  return (
    <div className="min-h-screen bg-[#e2d4ff]">
      <div className="container mx-auto flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm p-6 bg-custom-gradient text-white rounded-lg shadow-lg">
        <div className="w-full h-10 flex items-center gap-2">
      <input 
        type="text" 
        placeholder="Enter a city name.." 
        className="flex-1 h-full px-4 rounded-2xl border border-gray-300 text-black focus:outline-none"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        spellCheck="false"
      />
      <button className='rounded-2xl text-black bg-white px-4 py-2' onClick={()=>fetchData(input)} >Search</button>
       </div>
            {/* Weather Information */}
     <div className='w-full max-w-fit mx-auto'>
        <img src={weatherImg} className='h-40' alt="" />
        
     </div>

     <div className='w-full max-w-fit mx-auto'>
     <h1 className='text-6xl font-semibold'>{degree}°C</h1>
     <h2 className='text-4xl font-medium'>{city}</h2>
     </div>

     <div className='flex justify-around mt-8 p-4'>
        <div className='flex gap-4'>
            <img src={humidityImg} className='h-fit relative top-2 max-h-8' />
            <div>
                <h1>{humidity} %</h1>
                <p>Humidity</p>
            </div>
        </div>
        <div className='flex gap-4'>
        <img src={windImg} className='' />
            <div>
                <h1>{windSpeed} km/h</h1>
                <p>Wind Speed</p>
            </div>
        </div>
     </div>



        </div>
    
      </div>
    </div>
  )
}

export default Weather
