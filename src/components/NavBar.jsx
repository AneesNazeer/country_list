import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


export const NavBar = () => {
    const [currentURL, setCurrentURL] = useState('')
    const location = useLocation();
    useEffect(() => {
        setCurrentURL(location.pathname);
    }, [])
    const navautoclose = () => {
        try {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                document.getElementById('nav-bar-toogle-button').click()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <span className="navbar-brand" style={{ 'color': '#3c3c3c', 'fontWeight': '600' }}>Countries</span>
                <button id="nav-bar-toogle-button" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <Link to="/country_list/All" className={currentURL === '/country_list/All' ? 'nav-link active' : 'nav-link'} aria-current="page" onClick={() => { setCurrentURL('/country_list/All'); navautoclose() }}>All</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/country_list/Asia" className={currentURL === '/country_list/Asia' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/country_list/Asia'); navautoclose() }}>Asia</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/country_list/Africa" className={currentURL === '/country_list/Africa' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/country_list/Africa'); navautoclose() }}>Africa</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/country_list/Americas" className={currentURL === '/country_list/Americas' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/country_list/Americas'); navautoclose() }}>Americas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/country_list/Oceania" className={currentURL === '/country_list/Oceania' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/country_list/Oceania'); navautoclose() }}>Oceania</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/country_list/Other" className={currentURL === '/country_list/Other' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/country_list/Other'); navautoclose() }}>Other</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
