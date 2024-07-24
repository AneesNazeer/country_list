import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { All } from './All'
import { Asia } from './Asia'
import { Europe } from './Europe'
import { Africa } from './Africa'
import { Americas } from './Americas'
import { Oceania } from './Oceania'
import { Other } from './Other'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../Footer'

export const Country = () => {
    return (
        <>
            <div className="content" style={{ 'paddingTop': '100px' }}>
                <NavBar />
                <Routes>
                    <Route element={<All />} path="/"></Route>
                    <Route element={<All />} path="/All"></Route>
                    <Route element={<Asia />} path="/Asia"></Route>
                    <Route element={<Europe />} path="/Europe"></Route>
                    <Route element={<Africa />} path="/Africa"></Route>
                    <Route element={<Americas />} path="/Americas"></Route>
                    <Route element={<Oceania />} path="/Oceania"></Route>
                    <Route element={<Other />} path="/Other"></Route>
                </Routes>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}
