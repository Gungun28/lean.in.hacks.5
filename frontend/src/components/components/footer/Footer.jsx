import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className='footer'>
            <div className="return">
                <Link to='/'>
                    <button onClick={scrollToTop}>Jeevika</button>
                </Link>
            </div>
            <div className="navigate">
                <span className='title'>Helpful Links</span>
                <Link >FAQ</Link>
                <Link >Terms & Conditions</Link>
                <Link >Privacy Policy</Link>
                <Link >Cookie Policy</Link>
                <Link >FAQ</Link>
            </div>
            <div className="contact">
                <span className='title'>Contact Us</span>
                <span><i class="fa-solid fa-at"></i>info@mysite.com</span>
                <span><i class="fa-solid fa-phone"></i>123-456-7890</span>
                <span><i class="fa-solid fa-location-dot"></i>ABC Street, India</span>
                <span>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                </span>
            </div>
        </div>
    )
}

export default Footer