import React from 'react'

export default function StatCars({title,value,color}) {
  return (
    <div className={`rounded-xl p-5 shadow-sm ${color}`}>
      <p className="test-sm font-medium">{title}</p>
      <p className='text-3xl font-bold mt-2'>{value}</p>
    </div>
  )
}
