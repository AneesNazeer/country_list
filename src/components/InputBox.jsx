import React from 'react'

export const InputBox = ({ type, placeholder }) => {
    return (
        <div>
            <input type={type} className='form-control custom-style-input-box' placeholder={placeholder} />
        </div>
    )
}
