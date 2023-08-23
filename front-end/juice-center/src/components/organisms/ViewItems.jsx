import React from 'react'

export const ViewItems = ({viewData}) => {
    return (
        <div
            style={{
                width: '30%',
                padding: '5px',
            }}
        >
            <div
                style={{
                    padding:'3px',
                    border: '2px solid #ddd',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
                }}
            >
                <div>
                    <img
                        src={viewData?.image}
                        style={{
                            width: '100%'
                        }}
                    ></img>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <div>{viewData?.name}</div>
                </div>
                <div style={{ display: 'flex', }}>
                    <div>Cost: {viewData?.cost}</div>
                    <div>Quantity: {viewData?.quantity}</div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <button>Order</button>
                </div>
            </div>
        </div>
    )
}
