import React, { useEffect, useState,useRef } from 'react'

const Questions = ({data,questionIndex,selectedAnswer,hasAnswered,nextQuestion,checkAnswer,setQuizFinished}) => {
  const [mins,setMins]=useState(data.length-1);
  const [secs,setSecs]=useState(59);
  const alertShown=useRef(false);
 useEffect(()=>{
  const timer=setInterval(() => {
    setSecs((prevSecs)=>{
      if(prevSecs===0){
        if(mins===0){
          if(!alertShown.current){
            alert("Time's up Nigga!!")
          
         
          setQuizFinished(true);
          alertShown.current = true;
          

          }
          clearInterval(timer);
          
          return 0;

        }
        setMins((prevMins)=>prevMins-1)
        return 59;
      }
      return prevSecs-1;
    })
    
  }, 1000);
  return()=>clearInterval(timer)

 },[mins])
    return(
        <div className="flex flex-col gap-5">
    <h2 className="text-lg font-normal">
      {questionIndex + 1}. {data[questionIndex].question}
    </h2>
    
    {[data[questionIndex].option1,data[questionIndex].option2,data[questionIndex].option3,data[questionIndex].option4,].map((option,idx)=>{
      const optionIdx=idx+1;
      const isCorrect=data[questionIndex].ans===optionIdx;
      const isSelected=selectedAnswer===optionIdx;


      return <button
            key={optionIdx}
            disabled={hasAnswered}
            
            className={`w-full px-4 py-2 border-[1.3px] rounded-md cursor-pointer
              ${hasAnswered?(isCorrect?"bg-green-300 duration-700":isSelected?"bg-red-300 duration-700":"bg-white duration-700"):""}
              ${hasAnswered ? "cursor-not-allowed" : ""}`}

            onClick={()=>checkAnswer(optionIdx)}

      
      >{option}</button>
    })}
    <button
      className="bg-purple-700 px-12 py-2 text-white block mx-auto cursor-pointer rounded-sm hover:bg-purple-600 duration-300"
      onClick={nextQuestion}
    >
      Next
    </button>
    <span className="text-center">
      Showing {questionIndex + 1} out of {data.length} questions.
      <p><strong>TIme Left:-</strong> {mins}:{secs<10?`0${secs}`:secs}</p>
    </span>
    
    </div>
    )
}

export default Questions
