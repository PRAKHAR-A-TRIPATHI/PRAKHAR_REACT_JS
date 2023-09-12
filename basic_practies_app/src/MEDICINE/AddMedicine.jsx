import React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';


export default function AddMedicine(props) {
  console.log(props)
  const currentDate = dayjs(); // 
  const formattedDate = currentDate.format('YYYY-MM-DD');
  // const tomorrow = currentDate.add(5, 'day');
  // const formateTomorrow = tomorrow.format("YYYY-MM-DD")

  const [name, setName] = useState("")
  const [rack, setRack] = useState("")
  const [quntity, setQuntity] = useState("")
  const [display, steDisplay] = useState("none")
  const [batch, setBatch] = useState(0)
  const [date, setDate] = useState("")
  const [cheked, setCheked] = useState("none")
  const [cheked1, setCheked1] = useState("none")
  const [byDays, setbyDays] = useState("")
  const [num, setNum] = useState("")
  const [dateset, setDateSet] = useState(false)
  // console.log(dateset)


  function dateFn(num, byDays) {
    let day = dayjs(byDays)
    const tomorrow = day.add(num, 'day');
    const formateTomorrow = tomorrow.format("YYYY-MM-DD");
    // console.log(formateTomorrow)
    setDate(formateTomorrow)
  }

  function handleSubmit(e) {
    e.preventDefault();
    let a = name.trim();
    if (a === "" || quntity === "" || date === "" || rack === "" || batch === "") {
      alert("not valid form")
    } else {
      props.add(name, quntity, rack, batch, date);
      setName("");
      setRack("");
      setQuntity("");
      setBatch("");
      steDisplay("none")
    }

  }
  const diplayForm = (e) => {
    e.preventDefault();
    if(!props.toggleBtn){
      setName(props.editData.mName);
      setRack(props.editData.mRack);
      setQuntity(props.editData.mQuntity);
      setBatch(props.editData.mBatch);
      steDisplay("block")
    }
    if (display === "none") {
      steDisplay("block")
    } else {
      steDisplay("none")
    }
  }

  // const disData = (e)=>{
  //   // e.preventDefault();
  //   props.add(name, quntity, rack, batch, date);
  //   props.newFn()
  // }

  return (
    <div className=' relative'>
      <button className='rounded-lg bg-rose-600 p-2 ' onClick={diplayForm}>Add Medicine</button>
      <div className='absolute m-auto -left-32' style={{ display: display }}>
        <form className=' bg-red-300  w-96 rounded-lg p-5' onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-slate-700">Medicine</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 " />
          <label className="block text-sm font-medium text-slate-700">Rack</label>
          <select value={rack} onChange={(e) => setRack(e.target.value)} onClick={(e) => {
            props.betch.map((val) => {
              if (val.rack_id == rack) {
                setBatch(val.batch)
                // console.log(rack)
              }
            })
          }} className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'>
            {
              props.rack.map((element, index) => {
                return <option key={index}>{element.id}</option>;
              })
            }
          </select>
          <label className="block text-sm font-medium text-slate-700">Batch</label>
          <input type="text" disabled value={batch} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 " />
          <label className="block text-sm font-medium text-slate-700">Quntitry</label>
          <input type="number" value={quntity} onChange={(e) => setQuntity(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          />
          <div className="addDate flex justify-between">
            <div className="byDate w-1/2">
              <div className="flex">
                <label className="block text-sm font-medium text-slate-700">By Date</label>
                <input type="radio" name='expireDate' className=" checked:bg-blue-500 ... " onClick={(e) => { if (e.target.checked) { setCheked1("block"); setCheked("none"); setDateSet(true) } else { setCheked1("none"); setDate("") } }} />
              </div>
              <div style={{ display: cheked1 }}>
                <input type="date" className='rounded-md' onChange={(e) => {
                  if (e.target.value === formattedDate) {
                    setDate(e.target.value)
                  } else {
                    e.target.value = ""
                  }
                }} />
              </div>
            </div>
            <div className="byDays pl-6 ">
              <div className='flex'>
                <label className="block text-sm font-medium text-slate-700">By Days</label> <br />
                <input type="radio" name='expireDate' className=" checked:bg-blue-500 ..." onClick={(e) => { if (e.target.checked) { setCheked("block"); setCheked1("none"); setDateSet(false) } else { setCheked("none"); setDate("") } }} />
              </div>
              <div style={{ display: cheked }}>
                <input type="date" value={byDays} onChange={(e) => { setbyDays(e.target.value) }} className='m-1 rounded-md' />
                <input type="number" value={num} onChange={(e) => { setNum(e.target.value) }} className='m-1 rounded-md' />
              </div>
            </div>
          </div>
          <div className=' flex justify-between pt-4'>
            {
              props.toggleBtn ? <button className='rounded-lg bg-rose-400 p-2' onClick={() => {
                if (!dateset) {
                  dateFn(num, byDays)
                  // console.log(!dateset)
                }
              }}>Add Medicine</button> : <button className='rounded-lg bg-green-400 p-2' onClick={disData} >Edit</button>
            }
            <button className='rounded-lg bg-rose-400 p-2' >Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
