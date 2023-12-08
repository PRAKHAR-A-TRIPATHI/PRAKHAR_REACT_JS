import React, { useState } from 'react';
import { medicineData } from './varible';
import dayjs from 'dayjs';
import _ from 'lodash';
import { FaSun, FaMoon, FaCloudSun } from 'react-icons/fa';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);


function icons(slotTime) {
  let timeA = slotTime.split(":");

  const hour = timeA[0];
  const time = slotTime.split(" ")

  if (time[1] === "am") {
    if (hour >= 6 && hour < 12) {
      return <FaSun className='text-orange-500 text-2xl'/>;
    }
  }
  if (time[1] === "pm") {
    if (hour >= 6 && hour < 12) {
      return <FaMoon className='text-gray-500 text-2xl' />;
    } else {
      return <FaCloudSun />
    }
  }

}

function App() {
  const sameDateData = _.groupBy(medicineData, 'created_at');
  const items = Object.entries(sameDateData);
  const todayDate = dayjs().format('DD-MM-YYYY');
  let data = "";

  const todayItem = items.find(([date, itemsArray]) => {
    if (dayjs.utc(date).format('DD-MM-YYYY') === todayDate) {
      return itemsArray;
    }
  });
  const [details, setDetails] = useState(todayItem && todayItem[1]);
  const [selectedDate, setSelectedDate] = useState(dayjs().format("DD"));
  if (details) {
    const sameTime = _.groupBy(details, 'slot_time');
    const medicineArray = Object.entries(sameTime);

    const sortedMedicineArray = _.sortBy(medicineArray, ([time]) => {
      const hour = parseInt(time.split(':')[0], 10);
      const isPm = time.includes('pm');
      const timeFormat = isPm ? hour + 12 : hour;

      return timeFormat * 100 + parseInt(time.split(':')[1], 10);
    });
    const sortedMedicineData = Object.fromEntries(sortedMedicineArray);
    data = Object.entries(sortedMedicineData);
  }

  return (
    <>
      <div className='flex justify-between flex-wrap'>
        {items.map(([date, itemsArray]) => {
          const formattedDate = dayjs.utc(date).format('DD');
          const dayOfWeek = dayjs.utc(date).locale('en').format('ddd');
          const valid = dayjs().isBefore(dayjs.utc(date).format('YYYY-MM-DD'));
          return (
            <div key={formattedDate} className={`m-2 border-2 h-24 w-20 max-w-xs overflow-wrap rounded-md cursor-pointer p-2 ${selectedDate === formattedDate ? 'bg-blue-300' : ''}`}
              onClick={() => { setDetails(itemsArray); setSelectedDate(formattedDate) }}>
              <p>{formattedDate}</p>
              <p>{dayOfWeek}</p>
              {
                !valid && <p className='h-2 w-2 bg-red-600 rounded-xl'></p>
              }

            </div>
          );
        })}
      </div>

      {data &&
        <div>
          <div>
            {data.map(([slotTime, slotItems]) => (
              <div key={slotTime} className='flex justify-between border-2 border-blue-500 m-2 p-2 rounded-md'>
                <div>
                  <span className='text-center flex p-2'>
                  {icons(slotTime)}
                  </span>
                  {
                    slotItems.map((item) =>
                      <div key={item.id} >
                        <p >{item.medicine_name}</p>
                      </div>
                    )
                  }
                </div>
                <p className='text-2xl font-bold text-blue-500'> {slotTime}</p>
              </div>
            ))}
          </div>
        </div>}
    </>
  );
}

export default App;



