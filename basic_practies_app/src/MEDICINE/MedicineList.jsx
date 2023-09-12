import React from 'react'
import AddMedicineTable from './AddMedicineTable'

export default function MedicineList(props) {
    // console.log(props)
    return (
        <table className="table-fixed border-separate border-spacing-2 border border-slate-500 ... text-center">
            <thead>
                <tr>
                    <th className='border border-slate-600 ...'>Name</th>
                    <th className='border border-slate-600 ...'>Rack</th>
                    <th className='border border-slate-600 ...'>Batch Number</th>
                    <th className='border border-slate-600 ...'>Quntity</th>
                    <th className='border border-slate-600 ...'>Explain Date</th>
                    <th className='border border-slate-600 ...'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.map((val,index)=>{
                        return <AddMedicineTable val={val} key={index} index={index} remove={props.remove} editItem={props.editItem}/>
                    })
                }
         </tbody >
        </table >
  )
}
