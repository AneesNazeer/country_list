import React from 'react'

export const CountryCard = (props) => {
    let { name, region, flag } = { ...props.value }


    return (
        <div className='col-12 col-md-6'>
            <div className="card" style={{ 'borderRadius': '0px', 'border': '1px solid black' }}>
                <div className="row g-0">
                    <div className="col-4 ">
                        <img src={flag} className=" p-3" alt="..." style={{ 'height': '130px', 'width': '142px' }} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title" style={{ 'color': '#3c3c3c' }}>{name}</h5>
                            <p className="card-text"><small className="text-muted">{region}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
