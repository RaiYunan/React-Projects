import React from 'react'

function IncomeExpense({income,expense}) {
  const formattedIncome=income.toFixed(2);
  const formattedExpense=expense.toFixed(2);
  return (
    <div className='flex justify-around bg-slate-100 py-4 px-8 shadow-md rounded-md border-x-gray-300'>
      <div className='border-r-2 border-gray-300 pr-10'>
        <h2 className='font-medium text-md'>INCOME</h2>
        <span className='text-green-500 font-bold'>${formattedIncome}</span>
      </div>
      <div>
        <h2 className='font-medium text-md'>EXPENSE</h2>
        <span className='text-red-500 font-bold'>${formattedExpense}</span>
      </div>
    </div>
  )
}

export default IncomeExpense
