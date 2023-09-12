import React from 'react'

export default function AddMedicineTable(props) {
    console.log(props)
    return (
        <>
            <tr>
                <td className="border border-slate-700 ...">{props.val.mName}</td>
                <td className="border border-slate-700 ...">{props.val.mRack}</td>
                <td className="border border-slate-700 ...">{props.val.mBatch}</td>
                <td className="border border-slate-700 ...">{props.val.mQuntity}</td>
                <td className="border border-slate-700 ...">{props.val.mDate}</td>
                <td className="border border-slate-700 ..."><button className="rounded-lg bg-red-600 p-1 " onClick={()=>props.remove(props.index)}>Remove</button> <button onClick={()=>props.editItem(props.index)} className="rounded-lg bg-green-600 p-1 ">Ediit</button></td>
            </tr>
        
        </>
    )
}
