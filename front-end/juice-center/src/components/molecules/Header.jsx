import React from 'react'

export const Header = () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                backgroundColor: 'blanchedalmond'
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
                    <button
                        style={{
                            margin: 0,
                            padding: 0,
                            border: 'none',
                            background: 'none',
                            color: 'inherit',
                            font: 'inherit',
                            cursor: 'pointer',
                            outline: 'none'
                        }}
                    >Cart</button>
                </div>
            </div>
        </div>
    )
}
