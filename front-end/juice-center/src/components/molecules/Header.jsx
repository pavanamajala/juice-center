import React from 'react'

export const Header = () => {
    return (
        <div>
            <div style={{
                display: 'flex'
            }}>
                <div>
                    HOME
                </div>
                <div style={{
                    position: 'absolute',
                    left: '35%'
                }}>
                    JUICE CENTER
                </div>
                <div style={{
                    position: 'absolute',
                    right: '0'
                }}>
                    <button>Cart</button>
                </div>
            </div>
        </div>
    )
}
