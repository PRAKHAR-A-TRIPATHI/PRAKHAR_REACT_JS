import React from 'react'

export default function Products(props) {
 
    return (
        <div className="row mt-3">
            <div className="col">
                <h2>{props.val.name} <span className="badge bg-primary">${props.val.price}</span></h2>
            </div>
            <div className="col">
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-success" onClick={()=>{props.incremernt(props.index)}}>Add</button>
                    <button type="button" className="btn btn-warning">{props.val.quntity}</button>
                    <button type="button" className="btn btn-danger" onClick={()=>{props.decrement(props.index)}}>remove</button>
                </div>
            </div>
            <div className='col'>
                {props.val.quntity * props.val.price}
            </div>
           <button className='btn btn-danger col-2' onClick={()=>{props.remove(props.index  )}}> Remove</button>
        </div>
    )
}
