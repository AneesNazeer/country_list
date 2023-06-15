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
                            <Link to="/Country/All" className={currentURL === '/Country/All' ? 'nav-link active' : 'nav-link'} aria-current="page" onClick={() => { setCurrentURL('/Country/All'); navautoclose() }}>All</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Country/Asia" className={currentURL === '/Country/Asia' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/Country/Asia'); navautoclose() }}>Asia</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Country/Africa" className={currentURL === '/Country/Africa' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/Country/Africa'); navautoclose() }}>Africa</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Country/Americas" className={currentURL === '/Country/Americas' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/Country/Americas'); navautoclose() }}>Americas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Country/Oceania" className={currentURL === '/Country/Oceania' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/Country/Oceania'); navautoclose() }}>Oceania</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Country/Other" className={currentURL === '/Country/Other' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/Country/Other'); navautoclose() }}>Other</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
