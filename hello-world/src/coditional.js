import React from 'react'
import { useState } from 'react';

function Coditional() {
    const [Logged, setLogged] = useState(5);
    // let Logged=2;
    // thired
    return(
        <div>
            {Logged==1? <h1>user 1</h1> : Logged==2 ? <h1>user 2</h1> : <h1>user 3</h1> }
        </div>
    )

    // second
    // return(
    //     <div>
    //         {Logged? <h1>true</h1>:<h1>False</h1>}
    //     </div>
    //    )

    // first
    //   if(Logged){
    //         return (
    //             <h1>codition true</h1>
    //           )
    //     }else{
    //         return(
    //             <h1>Codition false</h1>
    //         )
    //     }

}

export default Coditional