import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './comnponate/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
     name:"prakhar",
     age:18,

  }
  let newArray = [ 1,2,3,4,5,6,7,889]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Taliwind Teast</h1>
      <Card channel="prakhare" sumobj ={newArray} />
      <Card channel="shlok" btn="click me"/>
    </>
  )
}

export default App
