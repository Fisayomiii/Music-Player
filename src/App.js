import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Signup from './components/Signup';
function App() {
  return (
    <>
      {/* <div>
       <Home/>
      </div> */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>



      {/* <div class="loader-wrapper">
        <span class="loader"><span class="loader-inner"></span></span>
      </div> */}

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
      </section>*/}
    </>
  );
}

export default App;