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
                            <Link to="/All" className={currentURL === '/All' ? 'nav-link active' : 'nav-link'} aria-current="page" onClick={() => { setCurrentURL('/All'); navautoclose() }}>All</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Asia" className={currentURL === '/Asia' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/Asia'); navautoclose() }}>Asia</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Africa" className={currentURL === '/Africa' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/Africa'); navautoclose() }}>Africa</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Americas" className={currentURL === '/Americas' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/Americas'); navautoclose() }}>Americas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Oceania" className={currentURL === '/Oceania' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/Oceania'); navautoclose() }}>Oceania</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Other" className={currentURL === '/Other' ? 'nav-link active' : 'nav-link'} onClick={() => { setCurrentURL('/Other'); navautoclose() }}>Other</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
