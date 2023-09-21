import React, { useEffect, useState } from 'react';

export default function Count() {
    const [value, setValue] = useState(60);
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     if (value > 0) {
    //         const timer = setTimeout(() => {
    //             setValue(value - 1);
    //         }, 100);
    //         
    //     } else {
    //         setError(true); 
    //     }
    // }, [value]);

    useEffect(() => {
        let intervalId;
        if (value > 0) {
            intervalId = setInterval(() => {
                setValue((prevValue) => prevValue - 1);
            }, 1000); 
        } else {
            setError(true);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [value]);


    return (
        <div>
            {error ? <p className=' text-7xl text-red-800'> Value reached zero{value}</p> : <p className='text-7xl'> Value: {value}</p>}
        </div>
    );
}

