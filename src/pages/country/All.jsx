import React from 'react'
import { CountryCard } from '../../components/CountryCard'
import { useSelector } from 'react-redux';

export const All = () => {
    let country = useSelector((state) => state.country)
    return (

        <div className='row g-3'>
            {country.map((element, index) => {
                return <CountryCard value={element} key={index + element.name + index} />
            })}
        </div>

    )
}
