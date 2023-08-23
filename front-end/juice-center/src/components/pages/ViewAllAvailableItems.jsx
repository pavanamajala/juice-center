import React from 'react'
import mockdata from '../../utils/mock/all-items-mock.json'
import { ViewItems } from '../organisms/ViewItems'

export const ViewAllAvailableItems = () => {
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
                />
            ))}
        </div>
    </div>
  )
}
