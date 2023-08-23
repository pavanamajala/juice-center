import React from 'react'
import { useState } from 'react'
import mockdata from '../../utils/mock/all-items-mock.json'
import { ViewItems } from '../organisms/ViewItems'

export const ViewAllAvailableItems = () => {

    const [selectedItem, setSelectedItem] = useState([]);

    const handleOnClick = (item) => {
        setSelectedItem([...selectedItem, item]);
    }

    console.log(selectedItem);

    localStorage.setItem('cart', JSON.stringify(selectedItem));

  return (
    <div>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        }}>
            {mockdata.map((data) => (
                <ViewItems
                    viewData={data}
                    handleOnClick={handleOnClick}
                />
            ))}
        </div>
    </div>
  )
}
