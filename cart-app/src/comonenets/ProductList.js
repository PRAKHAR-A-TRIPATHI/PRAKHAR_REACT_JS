import React from 'react'
import Products from './Products.js';

export default function ProductList(props) {
  //  console.log(props.incremernt);
  return (
    // if(props.product.length > 0){
    //   props.product.map((val, index) => {
    //         return <Products val={val} key={index} incremernt={props.incremernt} decrement={props.decrement} remove={props.remove} index={index} />
    //       })
    // }else{
    //   <h1 className='text-danger'>No Product Exist In The Cart</h1>
    // }
    props.product.length > 0?
    props.product.map((val, index) => {
      return <Products val={val} key={index} incremernt={props.incremernt} decrement={props.decrement} remove={props.remove} index={index} />
    })
    : <h1 className='text-danger'>No Product Exist In The Cart</h1>
  )
}
