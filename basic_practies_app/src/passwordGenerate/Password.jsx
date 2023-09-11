import { useCallback, useEffect, useState,useRef } from 'react'

export default function Password() {
  const [legnth, setLegnth] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passwordGenerater = useCallback(() => {
    let p = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*()_-+{}[]"
    for (let i = 1; i <= length; i++) {
      let str1 = Math.floor(Math.random() * str.length + 1);
      p += str.charAt(str1)
      console.log(legnth)
    }
    setPass(p)
  }, [legnth, num, char, setPass]);

  useEffect(() => { passwordGenerater() }, [passwordGenerater,legnth,char,num])


  return (
    <div style={{ backgroundColor: "black", color: "white" }} className='text-center'>
      <h1 className='text-4xl text-center '>Password Generator</h1>
      <div>
        <input type="text"
          value={pass}
          placeholder="password"
          className='text-4xl text-center'
          readOnly />
        <button className='outline-none bg-blue-700 text-4xl px-3 rounded-xl'>copy</button>
      </div>
      <div className='flex items-center gap-x-2 text-center'>
        <input type="range"
          min={6}
          max={100}
          value={legnth}
          className='cursor-pointer text-center'
          onChange={(e) => { setLegnth(e.target.value) }} />
        <label>Length : {legnth}</label>
      </div>
      <div className='flex items-center gap-x-2 text-center'>
        <input type="checkbox"
          defaultChecked={num}
          onChange={() => { setNum((prev) => !prev) }} />
        <label htmlFor="">Numbers</label>
        <input type="checkbox"
          defaultChecked={char}
          onChange={() => { setChar((prev) => !prev) }} />
        <label htmlFor="">Symbols</label>
      </div>
    </div>
  )


  // solutions
  // const [length, setLength] = useState(8)
  // const [numberAllowed, setNumberAllowed] = useState(false);
  // const [charAllowed, setCharAllowed] = useState(false)
  // const [password, setPassword] = useState("")

  // //useRef hook
  // const passwordRef = useRef(null)

  // const passwordGenerator = useCallback(() => {
  //   let pass = ""
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  //   if (numberAllowed) str += "0123456789"
  //   if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

  //   for (let i = 1; i <= length; i++) {
  //     let char = Math.floor(Math.random() * str.length + 1)
  //     pass += str.charAt(char)

  //   }

  //   setPassword(pass)


  // }, [length, numberAllowed, charAllowed, setPassword])

  // const copyPasswordToClipboard = useCallback(() => {
  //   passwordRef.current?.select();
  //   passwordRef.current?.setSelectionRange(0, 999);
  //   window.navigator.clipboard.writeText(password)
  // }, [password])

  // useEffect(() => {
  //   passwordGenerator()
  // }, [length, numberAllowed, charAllowed, passwordGenerator])
  // return (

  //   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
  //     <h1 className='text-white text-center my-3'>Password generator</h1>
  //     <div className="flex shadow rounded-lg overflow-hidden mb-4">
  //       <input
  //         type="text"
  //         value={password}
  //         className="outline-none w-full py-1 px-3"
  //         placeholder="Password"
  //         readOnly
  //         ref={passwordRef}
  //       />
  //       <button
  //         onClick={copyPasswordToClipboard}
  //         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
  //       >copy</button>

  //     </div>
  //     <div className='flex text-sm gap-x-2'>
  //       <div className='flex items-center gap-x-1'>
  //         <input
  //           type="range"
  //           min={6}
  //           max={100}
  //           value={length}
  //           className='cursor-pointer'
  //           onChange={(e) => { setLength(e.target.value) }}
  //         />
  //         <label>Length: {length}</label>
  //       </div>
  //       <div className="flex items-center gap-x-1">
  //         <input
  //           type="checkbox"
  //           defaultChecked={numberAllowed}
  //           id="numberInput"
  //           onChange={() => {
  //             setNumberAllowed((prev) => !prev);
  //           }}
  //         />
  //         <label htmlFor="numberInput">Numbers</label>
  //       </div>
  //       <div className="flex items-center gap-x-1">
  //         <input
  //           type="checkbox"
  //           defaultChecked={charAllowed}
  //           id="characterInput"
  //           onChange={() => {
  //             setCharAllowed((prev) => !prev)
  //           }}
  //         />
  //         <label htmlFor="characterInput">Characters</label>
  //       </div>
  //     </div>
  //   </div>
  // )
}
