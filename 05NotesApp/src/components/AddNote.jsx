import React,{useEffect, useState} from 'react'


function AddNote({notes,setNotes}) {
    const [input,setInput]=useState("");
    const [wordNumber,setWordNumber]=useState(200)
   
    function addNote(){
        setNotes([...notes,{text:input,date:new Date().toLocaleDateString(),id:Date.now()}])
        setInput("");
    }
    useEffect(()=>{
          const wordCount=input.trim().split(/\s+/).filter(Boolean).length;
        
           setWordNumber(200-wordCount)
        

    },[input])

    useEffect(()=>{
        console.log(notes);
    },[notes])
  return (
    <div className='w-[320px] h-[250px] bg-emerald-200 text-black rounded-lg p-4 '>
            <textarea rows="8" cols="10" placeholder='Type a text here... ' className='resize-none font-inputBox bg-emerald-200 h-[85%] w-full outline-none' value={input} onChange={(e)=>setInput(e.target.value)}></textarea>
            <div className='text-sm flex items-center justify-between'>
                <span >{Number(wordNumber)} remaining</span>
                <button className='bg-slate-300 px-3 py-2 rounded-full' onClick={addNote}>Save</button>
            </div>
        </div>
  )
}

export default AddNote
