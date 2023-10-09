import React, { useReducer, useState } from 'react'
function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            return [...state, newTodos(action.payload.name)]
        case "DELETE":
            return state.filter((item) => item.id !== action.payload);
    }
}
function newTodos(name) {
    return { id: Date.now(), name: name, copmplete: false }
}
function CompRC() {
    const [name, setName] = useState()
    const [todos, dispatch] = useReducer(reducer, [])
    console.log(todos)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "ADD", payload: { name: name } })
        setName("")
    }
    return (
        <div>CompRC <br />
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </form>
            {
                todos.map((val, index) => {
                    return(
                    <div className=' bg-green-400 m-1 p-2 text-white first-letter text-2xl ' key={index}>
                        <h1 className=' w-14' >{val.name}</h1>
                        <button className='bg-red-700 m-1 p-1 text-white first-letter text-2xl' onClick={() => dispatch({ type: "DELETE", payload: val.id })}>Delete</button>
                    </div>)
                })
            }
        </div>
    )
}

export default CompRC