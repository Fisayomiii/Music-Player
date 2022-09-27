import React from 'react';
import './App.css';
import Home from './components/Home';

// import loginbanner from '../src/image/loginbanner.png'
function App() {
  return (
    <>
      <div>
       <Home/>
       
      </div>


      {/* <div class="loader-wrapper">
        <span class="loader"><span class="loader-inner"></span></span>
      </div> */}
      {/* <section id='whole'>
        <div className='banner'></div>
        <div className='form'>
          <div className='formik'>
            <h5 className='welcome'>Welcome <br /> Sign up </h5>
            <div>
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Last Name' />
              <input type="email" placeholder='Email address ' />
              <input type="text" placeholder='Password ' />
              <button>Sign Up</button><br /><br />
              <p className='else'>Already have an account? <a href="./Signin">Sign In</a></p>
            </div>
          </div>
        </div>
      </section>
      <div class="home-page-circle-1"></div>
      <div class="home-page-circle-2"></div>
      <div class="home-page-circle-3"></div> */}

      {/* <section id='whole'>
        <div className='banner'></div>
        <div className='form'>
          <div className='formik'>
            <h5 className='welcome'>Welcome back<br /> Sign in </h5>
            <div>
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Password ' />
              <button>Sign In</button><br /><br />
              <p className='else'>or don't have an account? <a href="./Signin">Sign up</a></p>
            </div>
          </div>
        </div>
      </section>
      <div class="home-page-circle-1"></div>
      <div class="home-page-circle-2"></div>
      <div class="home-page-circle-3"></div> */}
    </>
  );
}

export default App;