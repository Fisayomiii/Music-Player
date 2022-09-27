import React, { useEffect, useState } from 'react'
import axios from 'axios'
import favicon from '../image/favicon.ico'
function Signup() {
    const [isloading, setisloading] = useState(true)
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")
    const endpoint = "http://localhost:5000/user/signup"
    useEffect(() => {
        setisloading(false)
    }, [])
    const signup = () => {
        let userDetails = { firstname, lastname, email, password }
        axios.post(endpoint, userDetails).then((result) => {
            console.log(result.data.message)
            setmessage(result.data.message)
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <>
            {isloading ?
                <div class="loader-wrapper">
                    <span class="loader"><span class="loader-inner"></span></span>
                </div>
                :
                <section id='whole'>
                    <div className='banner'></div>
                    <div className='form'>
                        <div className='formik'>
                            <img src={favicon} height='80' alt='logo' className='logo' />
                            <h4 className='welcome'>Welcome Newbie , <br /><br /> Sign Up</h4>
                            <div>
                                <input type="text" placeholder='First Name'
                                    onChange={(e) => setfirstname(e.target.value)} />
                                <input type="text" placeholder='Last Name'
                                    onChange={(e) => setlastname(e.target.value)} />
                                <input type="email" placeholder='Email address '
                                    onChange={(e) => setemail(e.target.value)} />
                                <input type="text" placeholder='Password '
                                    onChange={(e) => setpassword(e.target.value)} />
                                <button onClick={signup}>Sign Up</button>
                                <div className="alert alert-success">{message}</div>
                            </div>
                            <p className='else'>Already have an account? <a href="./Signin">Sign In</a></p>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Signup