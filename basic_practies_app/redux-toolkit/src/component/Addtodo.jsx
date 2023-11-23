import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, removeTodo } from '../fetures/todo/todoSlice'
import { toast } from 'react-toastify';

function Addtodo() {
    const [input, setInput] = useState("")
    const [update, setUpdates] = useState("")
    const dispatch = useDispatch()
    const item = useSelector(state => state.todoReducer.todos)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            if (update) {
                dispatch(editTodo({ update, input }));
                toast.info("update list Successfully")
                setUpdates("")
            } else {
                dispatch(addTodo(input))
                toast.success("add list Successfully")
            }
        }else{
            toast.warn("please enter value")
        }
        setInput("")
    }
    return (
        <div >
            <div className='p-2 h-full w-full flex justify-center ' >
                <div>
                    <h1 className="text-3xl font-bold">Redux Toolkit</h1>
                    <div className=' flex justify-between '>
                        <form onSubmit={handleSubmit}>
                            <input type="text" onChange={(e) => { setInput(e.target.value) }} value={input}
                                className='focus:outline-2 outline-blue-600 border-2 border-blue-600 m-2 px-2 p-0.5' />
                            <button className='m-2 bg-blue-600 text-white px-4 py-1 rounded-md '>{update ? "Update" : "Add"}</button>
                        </form>
                    </div>
                    <div className=''>
                        {
                            item.map((item, index) => (
                                <li key={item.id} className='bg-black text-white m-1 p-1 ps-2 rounded-md flex justify-between'>
                                    <p>{item.text}</p>
                                    <div>
                                        <button
                                            onClick={() => {
                                                dispatch(removeTodo(item.id))
                                                toast.error("remove item successfully")
                                            }}
                                            className='bg-red-600 rounded-md px-2 mx-1'>🗑</button>
                                        <button className='bg-blue-600 rounded-md px-2'
                                            onClick={() => {
                                                setInput(item.text);
                                                setUpdates(item.id)
                                            }}
                                        >✏</button>
                                    </div>
                                </li>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Addtodo