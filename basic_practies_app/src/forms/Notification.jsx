import React from 'react'

export default function Notification({ show, confirmDelete, setIsDeleteConfirmationOpen, rowDataToDelete,work }) {
  return (
    <div className={`max-w-md mx-auto w-full  bg-white absolute left-1/3 top-20 p-6 rounded-md shadow-md  ${show ? 'block' : 'hidden'}`}>
      <button className="absolute top-6  right-4 text-gray-600" onClick={() => {
        setIsDeleteConfirmationOpen(false)
      }}><i className="fa-solid fa-xmark fa-2xl"></i></button>
      <h2 className="text-2xl font-semibold mb-6">Are You Soure Delete Row</h2>
      <button className="rounded-lg bg-green-600 p-2 m-2 text-white"
        onClick={
          () => {
            confirmDelete();
          }
        }>Yes</button>
      <button className="rounded-lg bg-green-600 p-2 m-2 text-white"
        onClick={() => setIsDeleteConfirmationOpen(false)}>No</button>
    </div>
  )
}
