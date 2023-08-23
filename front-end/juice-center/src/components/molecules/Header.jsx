import React from 'react'

export const Header = () => {

    return (
        <div>
            <div style={{
                display: 'flex',
                backgroundColor: '#ff9300',
                padding: '10px',
                fontWeight: 'bolder'
            }}>
                <a
                    style={{
                        textDecoration: 'none'
                    }}
                    href={'/all-items'}
                >Home</a>
                <div style={{
                    position: 'absolute',
                    left: '35%'
                }}>
                    JUICE CENTER
                </div>
                <div style={{
                    position: 'absolute',
                    right: '0',
                    paddingRight: '14px'
                }}>
                    <a
                        style={{
                            textDecoration: 'none'
                        }}
                        href={'/cart'}

                    >Cart</a>
                </div>
            </div>
        </div>
    )
}
