import React from 'react'

export const CheckBox = ({ label }) => {
    return (
        <div className="form-check mt-2">
            <input className="form-check-input custom-style-check-box" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label ms-2" htmlFor="flexCheckChecked" style={{ 'fontWeight': 'bolder' }}>
                {label}
            </label>
        </div>
    )
}
