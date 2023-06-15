import React from 'react'

export const ButtonLoadingDisabled = () => {
    return (
        <div>
            <button className='btn new-button w-100' disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </button>
        </div>
    )
}
