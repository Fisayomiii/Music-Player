import React from 'react'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom';
import './Home.css';
function Signup() {
    return (
        <>
            <body className="container full-height-grow">

                <header className="main-header">
                    <a href="/" className="brand-logo">
                        <img src={logo} alt={logo} />
                        <div className="brand-logo-name"></div>
                    </a>
                    <nav className="main-nav">
                        <ul>
                            <li><a href="discover.html">Discover</a></li>
                            <li><Link to={"./signup"} className="btn">Join</Link></li>
                        </ul>
                    </nav>
                </header>

                <section className="home-main-section">
                    <div className="img-wrapper">
                        <div className="human-personSignupimg"></div>
                    </div>
                    <div className="call-to-action">
                        <div className='formik'>
                            <h5 className='welcome'>Welcome <br /> Sign up </h5>
                            <div className='form'>
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                                <input type="email" placeholder='Email address ' />
                                <input type="text" placeholder='Password ' />
                                <button>Sign Up</button><br />
                                <p className='else'>Already have an account? <a href="./Signin">Sign In</a></p>
                            </div>
                        </div>
                        {/* <Link to={"./signup"} className="btn">Join Now</Link> */}
                    </div>
                </section>
                <div className="home-main-circle-1"></div>
                <div className="home-main-circle-2"></div>
                <div className="home-main-circle-3"></div>
            </body>
        </>
    )
}

export default Signup