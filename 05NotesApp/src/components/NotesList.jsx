import { faDeleteLeft, faDrumSteelpan, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect, useState} from 'react'
import AddNote from './AddNote';

function NotesList() {
   
    const [notes, setNotes] = useState(()=>{
        const storedNotes=localStorage.getItem("notes");
        return storedNotes?JSON.parse(storedNotes):[]
    });
  
  
    const deleteNote = (id) => {
      setNotes((prevNotes) => {
        const updatedNotes = prevNotes.filter((note) => note.id !== id);
        return updatedNotes;
      });
    };
  

    useEffect(() => {
      if (notes.length > 0) {
        localStorage.setItem("notes", JSON.stringify(notes));
      } else {
        localStorage.removeItem("notes");
      }
    }, [notes]);
  
   
     
  return (
    <div className='w-[80%] mx-auto flex gap-6 flex-wrap my-8'>
        {notes.map((note)=>{
            return  <div className='w-[320px] h-[250px] bg-yellow-200 text-black rounded-lg p-4' key={note.id}>
            <p className='h-[90%] font-inputBox text-ellipsis overflow-hidden'>{note.text}</p>
            <div className='flex justify-between w-full items-center'>
            <p>{note.date}</p>
            <FontAwesomeIcon icon={faTrash} className='cursor-pointer' onClick={()=>deleteNote(note.id)}/>
            </div>
        </div>
        })}
        <AddNote notes={notes} setNotes={setNotes}/>

      
    </div>
  )
}

export default NotesList
