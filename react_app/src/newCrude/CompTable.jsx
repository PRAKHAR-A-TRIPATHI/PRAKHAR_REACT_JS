import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function CompTable({ ArrayItem, handleNotification }) {
    const navigate = useNavigate();
 
    if(ArrayItem.length===0){
        return (<h1>No Recent User Found</h1>)
    }
    return (
        <div>
            <table className="table table-danger">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FirstNames</th>
                        <th scope="col">LastNames</th>
                        <th scope="col">Emails</th>
                        <th scope="col">Numbers</th>
                        <th scope="col">PassWords</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        ArrayItem.map((val, index) =>
                            <tr key={index}>
                                <th scope="row">{val.id}</th>
                                <td>{val.FirstName}</td>
                                <td>{val.LastName}</td>
                                <td>{val.Email}</td>
                                <td>{val.number}</td>
                                <td>{val.Passwords}</td>
                                <td>
                                    <button className='btn bg-danger m-1 text-light '
                                        onClick={() => handleNotification(val.id)}>delete</button>
                                    <button className='btn bg-success m-1 text-light '
                                        onClick={() => {
                                            navigate(`/AddUsers/${val.id}`)
                                        }}>update</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default CompTable