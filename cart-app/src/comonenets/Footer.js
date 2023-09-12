import React from 'react'

export default function Footer(props) {
  return (
    <div className="row container m-auto mt-3" >
        <button className="btn btn-danger col-2" onClick={props.reset}>Reset</button>
        <div className="col-7 bg-dark text-white text-center">
            {props.totalAmount}
        </div>
        <button className = 'btn btn-primary col-3'>pay Now</button>
    </div>
  )
}
