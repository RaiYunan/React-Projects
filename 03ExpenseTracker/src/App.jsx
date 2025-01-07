import { useState } from 'react'

import IncomeExpense from './components/IncomeExpense'
import History from './components/History'
import Input from './components/Input'
function App() {
  const [income,setIncome]=useState(500)
  const [expense,setExpense]=useState(250)
  const [transactions,setTransactions]=useState([
    
])



  return (
    <div className='w-full min-h-screen bg-slate-900 flex justify-center items-center'>
      <div className='w-[350px] min-h-[500px] bg-white p-4 rounded-lg shadow-xl'>
      <h1 className='font-bold text-md text-center'>Expense Tracker</h1>
      <div className='mt-4 mb-2'>
        <h1 className='font-semibold text-[13px]'>YOUR BALANCE:</h1>
        <span className='font-bold text-xl'>${(income-expense).toFixed(2)}</span>
      </div>

      <IncomeExpense income={income} expense={expense}/>
      {transactions.length>0 && <History transactions={transactions}/>}
      <Input setTransactions={setTransactions} transactions={transactions} setIncome={setIncome} setExpense={setExpense}/>
    </div>

    </div>
  )
}

export default App
