import React, { useState } from 'react'
import AddMedicine from './AddMedicine'
import MedicineList from './MedicineList';

export default function Main() {
  let addMedicineArray = [];
  const [Medicine, setMedicine] = useState(addMedicineArray);
  const [id, setId] = useState(0);
  const [toggleBtn,settoggleBtn] = useState(true)
  const [editData,seteditData] = useState("");
  const [iseditItem,setiseditItem] = useState();
  const addMedicine = (name, quntity, rack,batch,date) => {
    let newMedicine = [...Medicine];
    newMedicine.push({
      mName: name,
      mQuntity: quntity,
      mRack: rack,
      mBatch: batch,
      id: id,
      mDate:date
    });
    setId(id + 1);
    setMedicine(newMedicine)
    // console.log(newMedicine)
  }
  const newFn = () =>{
    let newMedicine = [...Medicine];
    setMedicine(
      newMedicine.map((val)=>{
        if(val.id===iseditItem){
          return {...val,editData}
        }
      })
    )
  }

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
  const batch = [
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
  const remove = (index) => {
    let medicine = [...Medicine];
    let newMedicine = medicine;
    newMedicine.splice(index, 1);
    setMedicine(newMedicine)
  }

  const editItem = (index) =>{
    let medicine = [...Medicine];
    let newMedicine = medicine;
    let newEdidtItems = newMedicine.find((val)=>{
      return val.id === index;
    });
    // console.log(newEdidtItems);
    seteditData(newEdidtItems);
    setiseditItem(index);
    settoggleBtn(false)
  }
  
  return (
    <div>
      <div className="btn flex justify-center">
        <AddMedicine add={addMedicine} rack={racks} betch={batch} toggleBtn={toggleBtn} editData={editData} newFn={newFn} />
      </div>
      <div className="table">
        <MedicineList list={Medicine} remove={remove} editItem={editItem}/>
      </div>
    </div>
  )
}
