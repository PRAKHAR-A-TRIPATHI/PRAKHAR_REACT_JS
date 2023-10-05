import React from 'react'

export default function TableComponent({ apiData, deleteMedicine, showActions = true,text }) {
  // console.log(apiData)

  return (
    <div className='pt-2'>
      <h1>{text}</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Medicine</th>
            <th scope="col">Quantity</th>
            <th scope="col">Rack</th>
            {showActions && (
              <>
                <th scope="col">Batch Number</th>
                <th scope="col">Expire Date</th>
                <th scope="col">Action</th>
              </>

            )
            }

          </tr>
        </thead>
        <tbody>
          {apiData.map((medicine, index) => (
            <tr key={index}>
              <th scope="row">{medicine.id}</th>
              <td>{medicine.medicine}</td>
              <td>{medicine.quntity}</td>
              <td>{medicine.rack}</td>
              {showActions && (
                <>
                  <td>{medicine.batchNum}</td>
                  <td>{medicine.expireDate}</td>
                  <td>
                    <button className='btn bg-success text-white m-1'
                    onClick={()=>{
                      
                    }}>Update</button>
                    <button className='btn bg-danger text-white' onClick={() => deleteMedicine(medicine.id)}>Remove</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


