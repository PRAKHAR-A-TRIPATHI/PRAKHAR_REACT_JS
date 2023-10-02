import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams()
  return (
    <div>
      <h1 className='bg-gray-600 p-2 text-3xl text-black text-center'>USER : {userid}</h1>
    </div>
  )
}
