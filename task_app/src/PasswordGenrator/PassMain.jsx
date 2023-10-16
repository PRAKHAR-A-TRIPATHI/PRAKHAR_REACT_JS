import React, { useCallback, useEffect, useRef, useState } from 'react'


function PassMain() {
  const [legnths, setLegnth] = useState(6);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFJHIJKLMNOPQRSTUVWXYZabcdefjhilklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    }
    if (char) {
      str += "!@#$%^&*(){}[]|?/.,;:+-_=";
    }
    for (let i = 1; i < legnths; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [legnths, number, char,setPassword])
  useEffect(() => {
    passwordGenrator();
  }, [legnths, number, char, passwordGenrator])
  const passCopy = useRef(null)
  const copyPassToClip = useCallback(()=>{
    passCopy.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <div className='p-5 bg-black '>
      <h1 className='text-4xl bg-red-200 '>Password Genrator</h1> <br />
      <div>
        <input type="text" className='p-1 text-2xl'  value={password} ref={passCopy}/>
        <button className=' bg-blue-300 p-2' onClick={copyPassToClip}>Copy</button>
      </div>
      <div>
        <label htmlFor="range" className=' text-white'>legnth({legnths})</label>
        <input type="range" name="" id="range" min={6} max={100} value={legnths} onChange={(e) => { setLegnth(e.target.value) }} />
      </div>
      <div>
        <label htmlFor="" className=' text-white'> Number</label>
        <input type="checkbox" defaultChecked={number} onChange={() => setNumber(!number)} /> <br />
        <label htmlFor="" className=' text-white'> Charcter</label>
        <input type="checkbox" defaultChecked={char} onChange={() => setChar(!char)} />
      </div>
    </div>
  )
}

export default PassMain