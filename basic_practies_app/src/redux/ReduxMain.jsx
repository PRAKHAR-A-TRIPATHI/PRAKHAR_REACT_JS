import React from 'react'
import { useSelector} from 'react-redux/es/hooks/useSelector'
import { decNumber, incNumber } from './action';
import { useDispatch } from 'react-redux';

function ReduxMain() {
    const myState = useSelector((state) => state.changeAction);
    const dispatch = useDispatch();
    return (
        <>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <h1 className='text-2xl font-bold'>Incremnet / DEcrement Using redux</h1>
                <div className='flex items-center border-2 p-2   '>
                    <button className='bg-gray-300 border-2 text-center p-4  px-6 text-2xl hover:bg-gray-400 rounded-l-md '
                    onClick={() =>dispatch(incNumber()) }>+</button>
                    <p className=' border-2 text-center p-4 text-2xl'>{myState}</p>
                    <button className='bg-gray-300 border-2 text-center p-4  px-6  text-2xl hover:bg-gray-400 rounded-r-md'
                     onClick={() =>dispatch(decNumber()) }>-</button>
                </div>
            </div>
        </>
    )
}

export default ReduxMain