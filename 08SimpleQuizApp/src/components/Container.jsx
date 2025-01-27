import React, { useEffect, useState } from "react";
import { data } from "../assets/data";
import Questions from "./Questions";
import Reset from "./Reset";

const Container = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [hasAnswered,setHasAnswered]=useState(false);
  const [selectedAnswer,setSelectedAnswer]=useState(null);
  const [score,setScore]=useState(0);
  const [quizFinished,setQuizFinished]=useState(false);

  const checkAnswer=(ans)=>{
    setHasAnswered(true)
    setSelectedAnswer(ans);
    if(data[questionIndex].ans==ans){
        setScore((prevScore)=>prevScore+1);
    }

  }
  const nextQuestion=()=>{
    if(questionIndex<data.length-1){

    
    setQuestionIndex((prev)=>prev+1);
    setHasAnswered(false);
    setSelectedAnswer(null);
    }else{
        setQuizFinished(true);

    }
  }

  const resetHandle=()=>{
    setQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
    setHasAnswered(false);
    setSelectedAnswer(null);

  }
  

  return (
    <div className="w-[40%] h-fit bg-white text-black rounded-md p-6 flex flex-col gap-5 ">
      <h1 className="text-2xl font-semibold">Quiz App</h1>
      <div className="border-b-2 w-full"></div>
      
      {quizFinished?<Reset score={score} data={data} resetHandle={resetHandle}/>:<Questions data={data} questionIndex={questionIndex} selectedAnswer={selectedAnswer} hasAnswered={hasAnswered} nextQuestion={nextQuestion} checkAnswer={checkAnswer} setQuizFinished={setQuizFinished}/>}
    </div>
  );
};

export default Container;
