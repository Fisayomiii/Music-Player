// import React, { useEffect, useState } from 'react';
// import logo from '../image/logo.png';
// import { Link } from 'react-router-dom';
// import './Signup.css';
// function Signin() {
//     const [loading, setloading] = useState(false);

//     useEffect(() => {
//         setloading(true)
//         setTimeout(() => {
//             setloading(false)
//         }, 1500)
//     }, [])

//     return (
//         <>
//             {loading ? <div class="loader-wrapper">
//                 <div class="loading">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//             </div> :
//                 <body className="container full-height-grow">
//                     <header className='header'>
//                         <Link to={"./signup"} className="logo">
//                             <img src={logo} alt={logo} />
//                         </Link>
//                         <ul className='listitem'>
//                             <li><a href="discover.html">Discover</a></li>
//                         </ul>
//                     </header>

//                     <div className='formik'>
//                         <h5 className='welcome'>Welcome back✨<br /> Sign in </h5>
//                         <div className='form'>
//                             <input type="text" placeholder='First Name ' className='input'/>
//                             <input type="text" placeholder='Password ' className='input' />
//                             <button type="submit">Sign in</button><br />
//                             <p className='else'>Don't have an account yet ? <a href="./signup">Sign up</a></p>
//                         </div>
//                     </div><br />
//                     <div className="home-main-circle-1"></div>
//                     <div className="home-main-circle-2"></div>
//                     <div className="home-main-circle-3"></div>
//                 </body>}
//         </>
//     )
// }

// export default Signin

import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import logo from "../image/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";
function Signin() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [loading, setloading] = useState(false);
  const [smallloader, setsmallloader] = useState(false)
  const navigateto = useNavigate();

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("userPassword").replace(/"/g, "");
    let mail = localStorage.getItem("userEmail").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {

      setsmallloader(true)
      setTimeout(() => {
        setsmallloader(false)
        setFlag(false);

        navigateto("/main")
      }, 2500)

    }
  }

  return (
    <>
      {loading ? (
        <div class="loader-wrapper">
          <div class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <body className="container full-height-grow">
          <header className="header">
            <Link to={"./signup"} className="logo">
              <img src={logo} alt={logo} />
            </Link>
            <ul className="listitem">
              <li>
                <a href="discover.html">Discover</a>
              </li>
            </ul>
          </header>

          <div className="formik">
            <h5 className="welcome">Welcome back✨<br /> Sign in</h5>
            {flag && (
              <Alert color="primary" variant="warning">
                Fill in correct Info.
              </Alert>
            )}
            <form className="form" onSubmit={handleLogin}>
              <input type="text" placeholder="Email Address" className="input" onChange={(event) => setEmaillog(event.target.value)} />
              <input type="text" placeholder="Password " className="input" onChange={(event) => setPasswordlog(event.target.value)} />
              
              {!smallloader?<button type="submit">Sign in</button>:
              <span class="loader"><span class="loader-inner"></span></span>}
              <br />
            </form>

            <p className="else">Don't have an account yet ? <a href="./signup">Sign up</a></p>
          </div>
          <br />
          <div className="home-main-circle-1"></div>
          <div className="home-main-circle-2"></div>
          <div className="home-main-circle-3"></div>
        </body>
      )}
    </>
  );
}

export default Signin;

// import React, { useState } from "react";
// import { Alert } from "react-bootstrap";
// import Home from "./Home";

// function Login() {
// const [emaillog, setEmaillog] = useState(" ");
// const [passwordlog, setPasswordlog] = useState(" ");

// const [flag, setFlag] = useState(false);

// const [home, setHome] = useState(true);

// function handleLogin(e) {
//   e.preventDefault();
//   let pass = localStorage
//     .getItem("userPassword")
//     .replace(/"/g, "");
//   let mail = localStorage.getItem("userEmail").replace(/"/g, "");

//   if (!emaillog || !passwordlog) {
//     setFlag(true);
//     console.log("EMPTY");
//   } else if (passwordlog !== pass || emaillog !== mail) {
//     setFlag(true);
//   } else {
//     setHome(!home);
//     setFlag(false);
//   }
// }

//   return (
//     <div>
//       {home ? (
//         <form onSubmit={handleLogin}>
//           <h3>LogIn</h3>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               onChange={(event) => setEmaillog(event.target.value)}
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               onChange={(event) => setPasswordlog(event.target.value)}
//             />
//           </div>

//           <button type="submit" className="btn btn-dark btn-lg btn-block">
//             Login
//           </button>

          // {flag && (
          //   <Alert color="primary" variant="warning">
          //     Fill correct Info else keep trying.
          //   </Alert>
          // )}
//         </form>
//       ) : (
//         <Home />
//       )}
//     </div>
//   );
// }

// export default Login;
