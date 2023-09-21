import './App.css'
import AddmedicineForm from './AddmedicineForm'
import { useState } from 'react';
import AddMedicineTable from './AddMedicineTable';
import AddRecodeForm from './AddRecodeForm';

function App() {

  const [isPopupOpen, setIsPopupOpen] = useState();
  const [addMedicineData, setAddMedicineData] = useState([]);
  const [editBtn, setEditBtn] = useState(false);
  const [editData, seteditData] = useState("");
  const [editItem, setEditItem] = useState(null);
  // console.log(addMedicineData)
  // add recode
  const [isFormOpen, setIsFormOpen] = useState(false);
  const racks = [
    { id: 1, num: 1 },
    { id: 2, num: 2 },
    { id: 3, num: 3 },
    { id: 4, num: 4 },
    { id: 5, num: 5 },
    { id: 6, num: 6 },
    { id: 7, num: 7 },
    { id: 8, num: 8 },
    { id: 9, num: 9 },
    { id: 10, num: 10 },
  ];
  const batchs = [
    { rack_id: 1, batch: "A1" },
    { rack_id: 2, batch: "A2" },
    { rack_id: 3, batch: "A3" },
    { rack_id: 4, batch: "A4" },
    { rack_id: 5, batch: "A5" },
    { rack_id: 6, batch: "A6" },
    { rack_id: 7, batch: "A7" },
    { rack_id: 8, batch: "A8" },
    { rack_id: 9, batch: "A9" },
    { rack_id: 10, batch: "A10" },
  ];

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const addMedicineFun = (data) => {
    if (editBtn) {
      console.log("edit btn");
      setAddMedicineData((prevData) =>
          prevData.map((val, index) =>
            index === editItem ? { ...val, ...data } : val
          )
        );
        closePopup();
        console.log(addMedicineData)
    } else {

      setAddMedicineData([...addMedicineData, data])
    }
    // console.log(a)
  }

  const remove = (index) => {
    let newMedicine = [...addMedicineData];
    newMedicine.splice(index, 1);
    setAddMedicineData(newMedicine);
  }
  const UpdateMedicine = (index) => {
    let newEditItem = addMedicineData.find((element) => {
      return addMedicineData.indexOf(element) === index;
    })
    // console.log(newEditItem)
    seteditData(newEditItem)
    setEditItem(index);
  }
// addRecode
const openForm = () => {
  setIsFormOpen(true);
};

const closeForm = () => {
  setIsFormOpen(false);
};

  return (
    <>
    <div className='flex justify-center'>
    <button className='rounded-lg bg-rose-600 p-2 m-2 text-white' onClick={() => {
        openPopup();
        setEditBtn(false);
      }}>Add Medicine Form</button>
      <button className='rounded-lg bg-rose-600 p-2 m-2 text-white' 
       onClick={openForm}>
        Add Recode
      </button>
    </div>
     <div className=' h-1/3'>
     <h1 className=' text-center text-lg text-red-600 font-black'>ADD MEDICINE DATA</h1>
      <AddmedicineForm isOpen={isPopupOpen} onClose={closePopup} racks={racks} batchs={batchs} handledata={addMedicineFun} editBtn={editBtn} editData={editData} addMedicineDataArray={addMedicineData} />
      <AddMedicineTable addMedicineData={addMedicineData} removeData={remove} setEditBtn={setEditBtn} openPopup={openPopup} UpdateMedicine={UpdateMedicine} />
     </div >

     <div className=' h-1/3'>
      <h1 className=' text-center text-lg text-red-600 font-black'>ADD RECODE DATA</h1>
      <AddRecodeForm isOpen={isFormOpen} onClose={closeForm} addMedicineData={addMedicineData} />
     </div>
     
    </> 
  )
}

export default App
