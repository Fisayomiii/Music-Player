import React, { useEffect, useState } from 'react'
import favicon from '../image/favicon.ico'

function Signin() {
    const [isloading, setisloading] = useState(true)
    useEffect(() => {
        setisloading(false)
    }, [])

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
                            <h4 className='welcome'>Welcome , <br /><br /> Sign in</h4>
                            <div>
                                <input type="email" placeholder='Email address' />
                                <input type="text" placeholder='Password' />
                                <button >Sign IN</button>
                                {/* <div className="alert alert-success">{message}</div> */}
                            </div>
                            <p className='else'>Don't have an account? <a href="./Signup">Sign up</a></p>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Signin