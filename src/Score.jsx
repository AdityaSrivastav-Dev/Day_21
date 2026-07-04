import React, { useState } from 'react'

function Score() {
  const [score,setScore]=useState(0);
  return (
    
    
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-pink-500'>
      <div className="bg-white p-10 rounded-2xl shadow-lg shadow-green-500 text-center w-[500px]">
      





      
      <h2 className='text-2xl font-bold text-gray-700 mb-2'>
        Cricket Score
      </h2>

      <p className='    hidden text-gray-500 mb-6'> 
        State Example Using <span className='font-bold'>useState()</span>
      </p>

      <h1 className='text-7xl font-extr-aacold text-blue-600 mb-8'>{score}</h1>

      <button className='bg-blue-600 px-5 py-4 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 shadow-[0_10px_50px_rgba(0,0,0,0.25)] ' onClick={()=>{setScore(score +1)}}>Increment </button>
      

      <button className='bg-green-600 px-5 py-4 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 shadow-[0_10px_50px_rgba(0,0,0,0.25)] ' onClick={()=>{setScore(score > 0 ? score-1 :0)}}>Decrement </button>

      <button className='bg-blue-600 px-5 py-4 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 shadow-[0_10px_50px_rgba(0,0,0,0.25)] ' onClick={()=>{setScore(0)}}>Reset</button>
      
    </div>
    </div>
  )
}

export default Score