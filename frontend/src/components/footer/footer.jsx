import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
    return (
        <div className='footer' id='footer' >
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit harum a quod nostrum, ea soluta eius dolorum deserunt adipisci at. Accusamus blanditiis repellendus sequi eligendi rerum voluptates quas, ab praesentium consectetur, autem aspernatur rem impedit nisi maxime? Consequatur dolore officia minus. Natus ratione iure, atque sunt accusantium doloribus non ducimus?
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                </div>
                <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+62-889-288-3840</li>
                            <li>contact@tomato.com</li>
                        </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2026 © Tomato.com - All Right Reserved.
            </p>
        </div>
    )
}

export default footer
