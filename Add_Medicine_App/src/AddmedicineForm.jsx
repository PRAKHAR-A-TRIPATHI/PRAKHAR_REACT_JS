import React, { useState,useEffect } from 'react'
import dayjs from 'dayjs';

export default function AddmedicineForm({ isOpen, onClose, racks, batchs, handledata,editBtn,editData,addMedicineDataArray }) {
    // console.log(batchs);
    const [selectBatch, setSelectBatch] = useState("");
    const [selectRack, setSelectRack] = useState("");
    const [dispaly, steDisplay] = useState();
    const [dateDiv, setDateDiv] = useState(false);
    const [error, seterror] = useState("");
    const [expireDate, setExpireDate] = useState("");
    // console.log(addMedicineDataArray)
    // const [num,setNum]= useState("");
    const [addMedicineObj, setAddMedicineObj] = useState({ medicine: '', quntity: '', expiry: '', rack: '', batch: '' });
    const [selectedRadio, setSelectedRadio] = useState('');
    const currentDate = dayjs(); // 
    const formattedDate = currentDate.format('YYYY-MM-DD');
    // console.log(addMedicineObj)
    function dateFn(num, byDays) {
        let day = dayjs(byDays)
        const tomorrow = day.add(num, 'day');
        const formateTomorrow = tomorrow.format("YYYY-MM-DD");
        // console.log(formateTomorrow)
        setAddMedicineObj({ ...addMedicineObj, expiry: formateTomorrow })
    }
    useEffect(() => {
        if (editBtn && editData) {
            // Set the form fields with editData
            setAddMedicineObj({
                medicine: editData.medicine,
                quntity: editData.quntity,
                expiry: editData.expiry,
                rack: editData.rack,
                batch: editData.batch,
            });
        }
    }, [editBtn, editData]);
    function addMedicineData() {
        let a =addMedicineObj.medicine.trim();
        if( !addMedicineObj.medicine ||
            !addMedicineObj.quntity ||
            !addMedicineObj.rack ||
            !addMedicineObj.batch||
            !addMedicineObj.expiry||!a){
                seterror("Please fill all fields");
            }else if(editBtn){
                handledata(addMedicineObj)
                setAddMedicineObj({
                    medicine: '',
                    quntity: '',
                    expiry: '',
                    rack: '',
                    batch: '',
                });
                seterror("")
            }
            else{
               
                if(addMedicineDataArray.some((val)=>val.medicine === addMedicineObj.medicine)){
                    alert("not Same Value Add")
                }else{
                    handledata(addMedicineObj)

                    setAddMedicineObj({
                        medicine: '',
                        quntity: '',
                        expiry: '',
                        rack: '',
                        batch: '',
                    });
                    setDateDiv(false)
                    setSelectedRadio(true)
                    onClose();
                    seterror("")
                }
               
            }
  
    }
    return (
        <div>
            <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
                <div className="bg-white p-4 rounded shadow-md relative w-96">
                    <h1 className='font-black text-2xl'>Add Medicine Form</h1>
                    <button className="absolute top-6  right-4 text-gray-600" onClick={onClose}><i className="fa-solid fa-xmark fa-2xl"></i></button>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Medicine Name</label>
                            <input type="text" value={addMedicineObj.medicine} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Medicine"
                                onChange={(e) => { setAddMedicineObj({ ...addMedicineObj, medicine: e.target.value }) }} />
                            <label className="block text-gray-700 text-sm font-bold mb-2">Quntity</label>
                            <input type="Number" value={addMedicineObj.quntity} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Quntity"
                                onChange={(e) => { setAddMedicineObj({ ...addMedicineObj, quntity: e.target.value }) }} />
                        </div>
                        <div className=' mb-4'>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Rack</label>
                            <select
                                value={addMedicineObj.rack}
                                onChange={(e) => {
                                    setSelectRack(e.target.value)
                                    setAddMedicineObj({ ...addMedicineObj, rack: e.target.value })
                                }}
                                onClick={(e) => {
                                    batchs.map((val) => {
                                        if (val.rack_id == selectRack) {
                                            setSelectBatch(val.batch)
                                            setAddMedicineObj({ ...addMedicineObj, batch: val.batch })
                                        }
                                    })
                                }}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                                {
                                    racks.map((element, index) => {
                                        return <option key={index}>{element.id}</option>;
                                    })
                                }
                            </select>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Batch</label>
                            <input type="text" disabled value={addMedicineObj.batch} className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="selsect your Batch"
                                onChange={(e) => { setAddMedicineObj({ ...addMedicineObj, batch: e.target.value }) }} />
                        </div>
                        <div className="expirDate">
                            <div className='flex justify-between m-4'>
                                <label className="block text-gray-700 text-sm font-bold mb-2">by Date</label>
                                <input type="radio" name='expireDate' className=" checked:bg-blue-500 ..."
                                    onChange={(e) => {
                                        steDisplay(e.target.checked);
                                        setDateDiv(true);
                                        setSelectedRadio('byDate');
                                    }}
                                    checked={selectedRadio === 'byDate'} />
                                <label className="block text-gray-700 text-sm font-bold mb-2">by Date</label>
                                <input type="radio" name='expireDate' className=" checked:bg-blue-500 ..." onClick={(e) => {
                                    steDisplay(!e.target.checked)
                                    setDateDiv(true);
                                    setSelectedRadio('byDays');
                                }}
                                    checked={selectedRadio === 'byDays'} />
                            </div>
                            <div className={` ${dateDiv ? 'block' : 'hidden'}`} >
                                {dispaly ? (
                                    <div>
                                        <input
                                            type="date"
                                            value={addMedicineObj.expiry}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            onChange={(e) => {
                                                if (e.target.value >= formattedDate) {
                                                    seterror("")
                                                    // console.log(expireDate)
                                                    setAddMedicineObj({ ...addMedicineObj, expiry: e.target.value })
                                                } else {
                                                    seterror("not select previous Date")
                                                    setAddMedicineObj({ ...addMedicineObj, expiry: "" })
                                                    e.target.value = ""
                                                }
                                            }}
                                        />
                                        <p className=' text-red-600'>{error}</p>
                                    </div>
                                ) : (
                                    <div>
                                        <input
                                            type="date"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                                            onChange={(e) => {
                                                setExpireDate(e.target.value)
                                            }}
                                        />
                                        <input
                                            type="number"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="select your Batch"
                                            onChange={(e) => {
                                                // setNum(e.target.value);
                                                // console.log(e.target.value)
                                                dateFn(e.target.value, expireDate)

                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            {
                                editBtn ?   <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                                onClick={()=>{
                                    addMedicineData();
                                }}
                                >Update Data</button> : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => {
                                    // onClose();
                                    addMedicineData();
                                }}>Submit</button>
                            }
                           
                        </div>
                        <h1>{error}</h1>
                    </form>
                </div>
            </div>
        </div>
    )
}
