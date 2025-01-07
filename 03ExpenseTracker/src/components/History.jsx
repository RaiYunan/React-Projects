import React, { useState } from 'react'

function History({transactions}) {
    
  return (
    <div>
      <h2 className='font-bold'>History</h2>
      <hr  className=' border-t-2 border-gray-500 my-2'/>
      <ul>{transactions.map((transaction)=>{
        return <li key={transaction.id} className={`${transaction.amount>0?"border-green-600 border-r-4":"border-red-600 border-r-4 "} flex justify-between py-3 px-1 rounded-md shadow-lg my-2`}>
            <p  className='font-semibold'>{transaction.text}</p> 
            <span>{transaction.amount>0?`+${transaction.amount}`:transaction.amount}</span> </li>
      })}</ul>

    </div>
  )
}

export default History
