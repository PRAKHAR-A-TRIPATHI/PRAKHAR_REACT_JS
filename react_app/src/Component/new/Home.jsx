import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <Link to="task1">Task 1</Link> <br />
    <Link to="task2">Task 2</Link>
    </div>
  )
}
