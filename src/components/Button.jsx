import React from 'react'

export const Button = ({ label }) => {
    return (
        <div>
            <button className='btn new-button w-100'>{label}</button>
        </div>
    )
}
