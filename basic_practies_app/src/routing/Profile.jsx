import React, { useEffect, useState } from 'react'
import Updateform from './Updateform';
import Address from './Address';

function Profile() {
    let user = JSON.parse(localStorage.getItem('use-info'));
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isAddressForm, setIsAddressForm] = useState(false);
    const openForm = () => {
        setIsFormOpen(true);
    };
    const closeForm = () => {
        setIsFormOpen(false);
    };
    return (
        <div>
            <div >
                <div className='p-4 bg-white border rounded shadow-md  w-full'>
                    <div className=' border-b-2 border-sky-500 p-2 flex justify-between'>
                        <h1 className='text-2xl'>Primary Details</h1>
                        <button className='text-blue-500' onClick={openForm}>Edit</button>
                    </div>
                    <div className='flex justify-between p-4'>
                        <div className=' w-2/4'>
                            <div className=' pb-4'>
                                <p className=' text-gray-400'>First Name</p>
                                <p>{user && user.name}</p>
                            </div>
                            <div className=' pb-4'>
                                <p className=' text-gray-400'>Last Name</p>
                                <p>{user && user.Lname}</p>
                            </div>
                            <div className=' pb-4'>
                                <p className=' text-gray-400'>Email</p>
                                <p>{user && user.email}</p>
                            </div>
                            <div className=' pb-4'>
                                <p className=' text-gray-400'>Gender</p>
                                <p>{user && user.gender}</p>
                            </div>
                        </div>
                        <div className=' w-2/4'>
                            <div className=' pb-4'>
                                <p className=' text-gray-400'>Middle Name</p>
                                <p>{user && user.Mname}</p>
                            </div>
                            <div className=' pb-4'>
                                <p className=' text-gray-400'>Display Name</p>
                                <p>{user && user.name} {user && user.Mname} {user && user.Lname}</p>
                            </div>
                            <div className=' pb-4'>
                                <p className=' text-gray-400'>Date Of Birth</p>
                                <p>{user && user.dob}</p>
                            </div>
                            <div className=' pb-4'>
                                <p className=' text-gray-400'>Mobile Num:</p>
                                <p>{user && user.tel}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-4 bg-white border rounded shadow-md  w-full'>
                    <div className=' border-b-2 border-sky-500 p-2 flex justify-between'>
                        <h1 className='text-2xl'>Address Details</h1>
                        <button className='text-blue-500' onClick={()=>setIsAddressForm(true)}>Edit</button>
                    </div>
                    <div className='flex justify-between p-4'>
                        <div className=' w-2/4'>
                            <p className=' text-gray-400'>Current Addresh :</p>
                            <p>{user&&user.CurrAddress}</p>
                        </div>
                        <div className=' w-2/4'>
                            <p className=' text-gray-400'> PERMANENT ADDRESS :</p>
                            <p>{user&&user.PermAddress}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Updateform isOpen={isFormOpen} onClose={closeForm} />
            <Address isAddressForm={isAddressForm} setIsAddressForm={setIsAddressForm}/>
        </div>
    )
}

export default Profile