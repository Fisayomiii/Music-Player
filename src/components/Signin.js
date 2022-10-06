import React from 'react'
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';
import './Signup.css';
function Signin() {
    return (
        <>
            <body className="container full-height-grow">
                <header className='header'>
                    <Link to={"./signup"} className="logo">
                        <img src={logo} alt={logo} />
                    </Link>
                    <ul className='listitem'>
                        <li><a href="discover.html">Discover</a></li>
                    </ul>
                </header>

                <div className='formik'>
                    <h5 className='welcome'>Welcome back<br /> Sign in </h5>
                    <div className='form'>
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Password ' />
                        <button>Sign in</button><br />
                        <p className='else'>Don't have an account yet ? <a href="./Signup">Sign up</a></p>
                    </div>
                </div><br />
                <div className="home-main-circle-1"></div>
                <div className="home-main-circle-2"></div>
                <div className="home-main-circle-3"></div>
            </body>
        </>
    )
}

export default Signin