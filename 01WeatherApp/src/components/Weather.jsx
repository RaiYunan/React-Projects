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

    const [weatherData, setWeatherData] = useState({
        weatherImg: clearImg,
        city: "Dharan",
        degree: "",
        humidity: "",
        windSpeed: "",
      });
    

      const API_KEY = '85cb48b2e20fdcb89097aa331af09cc1';
      const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const [input,setInput]=useState("");

    const weatherImages = {
        Clouds: cloudImg,
        Clear: clearImg,
        Rain: rainImg,
        Drizzle: drizzleImg,
        Snow: snowImg,
      };
      
    const getWeatherImage = (weather) => weatherImages[weather] || clearImg;

    const displayData=(data)=>{
        setWeatherData({
            weatherImg: getWeatherImage(data.weather[0].main),
            city: data.name,
            degree: Math.floor(data.main.temp - 273),
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
        })
        setInput("");

    }


    
    
    const handleWeatherData=async(cityName)=>{
        if(!cityName.trim()){
            alert("Please Enter city name!")
            return;
        }
       try {
        const response=await fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}`);
        if (!response.ok){
            alert("City not found!!")
            
        }
        const data=await response.json();
        displayData(data);
    
       } catch (error) {
          console.log(error)
       }
        
    }
    useEffect(()=>{

        handleWeatherData(weatherData.city);

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
      <button className='rounded-2xl text-black bg-white px-4 py-2' onClick={()=>handleWeatherData(input)} >Search</button>
       </div>
            {/* Weather Information */}
     <div className='w-full max-w-fit mx-auto'>
        <img src={weatherData.weatherImg} className='h-40' alt="" />
        
     </div>

     <div className='w-full max-w-fit mx-auto'>
     <h1 className='text-6xl font-semibold'>{weatherData.degree}°C</h1>
     <h2 className='text-4xl font-medium'>{weatherData.city}</h2>
     </div>

     <div className='flex justify-around mt-8 p-4'>
        <div className='flex gap-4'>
            <img src={humidityImg} className='h-fit relative top-2 max-h-8' />
            <div>
                <h1>{weatherData.humidity} %</h1>
                <p>Humidity</p>
            </div>
        </div>
        <div className='flex gap-4'>
        <img src={windImg} className='' />
            <div>
                <h1>{weatherData.windSpeed} km/h</h1>
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
