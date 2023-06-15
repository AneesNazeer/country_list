import React from 'react'
import { Facebook } from '../components/Facebook'
import { Twitter } from '../components/Twitter'
import { Linkedin } from '../components/Linkedin'
import { Youtube } from '../components/Youtube'

export const Footer = () => {
    return (
        <div className='my-2 my-md-5 mb-md-3 pt-5'>
            <center>
                <div className='row' style={{ 'maxWidth': '300px' }}>
                    <div className='d-flex justify-content-around'>
                        <Facebook />
                        <Twitter />
                        <Linkedin />
                        <Youtube />
                    </div>
                </div>
                <div className='row mt-4'>
                    <b>Example@email.com</b>
                    <br />
                    <b className='mt-2'>Copyright © 2020 Name.All rights reserved</b>
                </div>
            </center>
        </div>
    )
}
