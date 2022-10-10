import React, { useEffect, useState } from 'react';
import logo from '../image/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [newuser, setnewuser] = useState([])
    const [require, setrequire] = useState()
    const [requiremail, setrequiremail] = useState()
    const [passwordlenght, setpasswordlenght] = useState()
    const [loading, setloading] = useState(false);
    const [smallloader, setsmallloader] = useState(false)

    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 2500)
    }, [])

    const navigateto = useNavigate();

    const signUp = () => {
        if (firstName === '' || lastName === '' || email === '' || password === '') {
            setrequire('There is something wrong , a field is required!')
            return
        }
        else if (!email.includes("@")) {
            setrequiremail('please enter a valid Email Address')
        }
        else if (password.length < 4) {
            setpasswordlenght('password length must be at least four characters')
        }
        else {
            setsmallloader(true)
            setTimeout(() => {
                setsmallloader(false)
                let newidentity = { firstName, lastName, email, password }
                setnewuser([...newuser, newidentity])
                setfirstName("")
                setlastName("")
                setemail("")
                setpassword("")
                localStorage.newUser = JSON.stringify(newidentity)

                navigateto("/Signin")
            }, 2500)

        }
    }

    return (
        <>
            {loading ? <div class="loader-wrapper">
                <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div> :
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
                        <h5 className='welcome'>Welcome <br /> Sign up </h5>
                        <div className='text-danger'>{require}</div>
                        <div className='text-danger'>{passwordlenght}</div>
                        <div className='text-danger'>{requiremail}</div>
                        <div className='form'>
                            <input type="text" placeholder='First Name' onChange={(e) => setfirstName(e.target.value)} value={firstName} className='input' />
                            {/* <div className='text-danger'>{require}</div> */}

                            <input type="text" placeholder='Last Name' onChange={(e) => setlastName(e.target.value)} value={lastName} className='input' />
                            {/* <div className='text-danger'>{require}</div> */}

                            <input type="email" placeholder='Email Address' onChange={(e) => setemail(e.target.value)} value={email} className='input' />
                            {/* <div className='text-danger'>{require}</div>
                            <div className='text-danger'>{requiremail}</div> */}

                            <input type="password" placeholder='Password' onChange={(e) => setpassword(e.target.value)} value={password} className='input' />

                            {!smallloader?<button onClick={signUp}>Sign Up</button>:
                            <span class="loader"><span class="loader-inner"></span></span>}
                            <br />

                            <p className='else'>Already have an account? <a href="./Signin">Sign In</a></p>
                        </div>
                    </div>
                    <br />
                    <div className="home-main-circle-1"></div>
                    <div className="home-main-circle-2"></div>
                    <div className="home-main-circle-3"></div>
                </body>}

        </>
    )
}

export default Signup