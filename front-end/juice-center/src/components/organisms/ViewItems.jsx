import React from 'react'

export const ViewItems = ({ viewData, handleOnClick }) => {
    return (
        <div
            style={{
                width: '30%',
                padding: '5px',
            }}
        >
            <div
                style={{
                    padding: '3px',
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
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }}>
                    <div>{viewData?.name}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>Cost: <b>{viewData?.cost}</b></div>
                    {/* <div>Qty: {viewData?.quantity}</div> */}
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <button
                        style={{
                            backgroundColor: '#06eb06'
                        }}
                        onClick={() => handleOnClick(viewData)}
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
