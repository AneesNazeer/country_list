import React from 'react'
import { CountryCard } from '../../components/CountryCard'
import { useSelector } from 'react-redux';

export const Other = () => {
    let country = useSelector((state) => state.country)
    return (
        <>
            <div className='row g-3'>
                {country.map((element, index) => {
                    if (element.region === 'Polar' || element.region === 'Antarctic Ocean') {
                        return <CountryCard value={element} key={element.name + index} />
                    } else {
                        return null;
                    }
                })}
            </div>
        </>

    )
}
