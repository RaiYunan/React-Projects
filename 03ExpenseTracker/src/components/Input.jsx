import React, { useEffect, useState } from 'react'

function Input({setTransactions,transactions,setIncome,setExpense}) {
    const [text,setText]=useState("");
    const [amount,setAmount]=useState("");
    const addTransaction=()=>{
        if(!text.trim()) return alert("Enter text...")
        if(!amount.trim()) return alert("Enter amount...")
        
        const newTransaction={text:text,id:Date.now(),amount:Number(amount)}
        setTransactions([...transactions,newTransaction]);
        setText("");
        setAmount("");
        }
        

   useEffect(()=>{
        let totalIncome = 0;
        let totalExpense = 0;
      
        transactions.forEach((trans) => {
            if (trans.amount > 0) {
                totalIncome += trans.amount;
            } else {
                totalExpense += Math.abs(trans.amount);
            }
        });
      
        setIncome(totalIncome);
        setExpense(totalExpense);
    
   },[transactions])
  return (
    <div className='mt-2'>
      <h2 className='font-bold'>Add new transaction</h2>
      <hr className='border-t-2 border-gray-500 my-2' />
      <div className='my-2'>
        <label className='font-semibold'>Text</label>
        <input 
         type="text"
         value={text}
         onChange={(e)=>setText(e.target.value)}
         placeholder='Enter text...' 
         className='w-full p-2 border-gray-500 border-[2px] rounded-sm mt-2' />
      </div>
      <div>
      <label className='font-semibold'>Amount <br />(negative-expense,positive-income)</label>
        <input 
         type="text"
         value={amount}
         onChange={(e)=>setAmount(e.target.value)}
         placeholder='Enter amount...' 
         className='w-full p-2 border-gray-500 border-[2px] rounded-sm mt-2'
         />
      </div>
      <button className='bg-purple-600 text-white w-full inline-block rounded-md py-2 my-2' onClick={addTransaction}>Add transaction</button>
    </div>
  )
}

export default Input
