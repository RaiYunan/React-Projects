import React, { useEffect } from 'react'
import icon from '../assets/todo_icon.png'
import tick from '../assets/tick.png'
import noTick from '../assets/not_tick.png'
import { useState } from 'react'

function Todo() {
    const [input,setInput]=useState("");
    const [isEditing,setEditing]=useState(false);
    const [editingId,setEditingId]=useState(null);
    
    const updateTodo=()=>{
    
        setTodos((prev)=>prev.map((todo)=>todo.id===editingId?{...todo,text:input}:todo));

    }

    const [todos,setTodos]=useState(()=>{
        try {
            const savedTodos=localStorage.getItem("todos");
            return savedTodos?JSON.parse(savedTodos):[{
                text:"Learn React JS Basics",
                id:Date.now(),
                completed:false
            }]
            
            
        } catch (error) {
            console.log("Error:",error)
            return [{
                text:"Learn React JS Basics",
                id:Date.now(),
                completed:false
            }]
            
        }
    });

    const addTask=(task)=>{
        if(isEditing){
            console.log("Editing");
            updateTodo();
            setEditing(false);
            setInput("");

        }else{
            if(task.trim()){
                setTodos([...todos,{text:task,id:Date.now(),completed:false}])
            setInput("")
    
            }

        }
       
        
    }

    
    const deleteTodo=(id)=>{
        setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
    }

    const HandleEditTodo=(name,id)=>{
        setInput(name);
        setEditing(true);
        setEditingId(id);
        
    }
    const checkToDoCompleted=(id)=>{
        setTodos((prev)=>prev.map((todo)=>(
            todo.id===id?{...todo,completed:!todo.completed}:todo
        )))
    }

    // useEffect(()=>{
    //     const todos=JSON.parse(localStorage.getItem("todos"));
    //     if (todos && todos.length>0){
    //         setTodos(todos);
    //     }
    // },[])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])
    

  return (
    <>
      <div className='bg-white rounded-xl w-[450px] py-8 px-6 h-fit min-h-[450px]'>
        <div className='flex items-center gap-1'>
        <img src={icon} alt="" className='h-8' />
        <h1 className='font-bold text-xl'>To-Do-List</h1>
        </div>
        {/* Input and add */}
        <div className='flex my-6 bg-gray-200 rounded-full'>
            <input type="text" placeholder='Enter a task' value={input} onChange={(e)=>setInput(e.target.value)} className='flex-grow bg-gray-200 outline-0 w-full z-10 px-4 text-black rounded-l-full'  />
            <button className='bg-orange-600 py-3 px-6 text-white rounded-full ' onClick={()=>addTask(input)}>{isEditing?"Update":"Add+"}</button>
        </div>

        <ul>
            {todos.map((todo)=>(
                <div className='flex items-center gap-2 my-4'>
                    
                    <li className={`flex-grow flex items-center ${todo.completed?"line-through":"text-blue"}`} onClick={()=>checkToDoCompleted(todo.id)} key={todo.id}><img src={todo.completed?tick:noTick} className='h-4 mr-2' />{todo.text}</li>
                    <button className='bg-green-600 text-white px-4 py-2 rounded-lg' onClick={()=>HandleEditTodo(todo.text,todo.id)}>Edit</button>
                    <button className='bg-red-600 text-white px-4 py-2 rounded-lg' onClick={()=>deleteTodo(todo.id)}>Delete</button></div>
            ))}
            
        </ul>

      </div>
    </>
  )
}

export default Todo
