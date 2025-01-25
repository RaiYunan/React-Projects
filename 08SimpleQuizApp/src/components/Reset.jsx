import React from 'react'

const Reset = ({score,data,resetHandle}) => {
  return (
    <div>
      <h2>You scored {score} out of {data.length}!</h2>
      <button  className='px-8 mt-4 py-2 block mx-auto rounded-md text-white bg-purple-700' onClick={resetHandle}>Reset</button>
    </div>
  )
}

export default Reset
