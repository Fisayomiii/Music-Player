import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import logo from "../image/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";

function Signup() {
  const [loading, setloading] = useState(false);
  const [smallloader, setsmallloader] = useState(false)
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const navigateto = useNavigate();

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2500);
  }, []);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      setFlag(true);
    } 
    else {
      setsmallloader(true)
      setTimeout(() => {
        setsmallloader(false)
        setFlag(false);
        localStorage.setItem("userEmail", JSON.stringify(email));
        localStorage.setItem("userPassword", JSON.stringify(password));

        setLogin(!login);
        navigateto("/signin")
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
            <h5 className="welcome">
              Welcome <br /> Sign up
            </h5>
            {flag && (
              <Alert color="primary" variant="danger">
                Every Field is important!
              </Alert>
            )}
            <form className="form" onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="First Name"
                className="input"
                name="firstname"
                onChange={(event) => setfirstname(event.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input"
                name="lastname"
                onChange={(event) => setlastname(event.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input"
                name="email"
                onChange={(event) => setemail(event.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="input"
                name="password"
                onChange={(event) => setpassword(event.target.value)}
              />
              {!smallloader?<button type="submit">Sign Up</button>:
              <span class="loader"><span class="loader-inner"></span></span>}

            </form>

            {/* <span class="loader"><span class="loader-inner"></span></span> */}
            <br />
            <p className="else">
              Already have an account? <a href="./signin">Sign In</a>
            </p>
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

export default Signup;

// import React, { useState } from "react";
// import { Form, Alert } from "react-bootstrap";
// import Signin from "./Signin";
// import './Signup.css';

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [profession, setProfession] = useState("");

//   const [flag, setFlag] = useState(false);
//   const [login, setLogin] = useState(true);
// function handleFormSubmit(e) {
//   e.preventDefault();

//   if (!name || !email || !password || !phone || !profession) {
//     setFlag(true);
//   } else {
//     setFlag(false);
//     localStorage.setItem("userEmail", JSON.stringify(email));
//     localStorage.setItem(
//       "userPassword",
//       JSON.stringify(password)
//     );

//     setLogin(!login);
//   }
// }

// function handleClick() {
//   setLogin(!login);
// }

//   return (
//     <>

//         <div>
//           {" "}
//           {login ? (
//             <form onSubmit={handleFormSubmit}>
//               <h3>Register</h3>

//               <div className="form-group">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter Full Name"
//                   name="name"
//                   onChange={(event) => setName(event.target.value)}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Enter email"
//                   onChange={(event) => setEmail(event.target.value)}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Enter password"
//                   onChange={(event) => setPassword(event.target.value)}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Phone No.</label>
//                 <input
//                   type="Phone"
//                   className="form-control"
//                   placeholder="Enter contact no"
//                   onChange={(event) => setPhone(event.target.value)}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Choose your Profession</label>
//                 <Form.Control
//                   as="select"
//                   onChange={(event) => setProfession(event.target.value)}
//                 >
//                   <option>Select</option>
//                   <option>Artist</option>
//                   <option>Photographer</option>
//                   <option>Team Player</option>
//                   <option>Full Stack</option>
//                 </Form.Control>
//               </div>

//               <button type="submit" className="btn btn-dark btn-lg btn-block">
//                 Register
//               </button>
//               <p onClick={handleClick} className="forgot-password text-right">
//                 Already registered log in?
//               </p>
//               {flag && (
//                 <Alert color="primary" variant="danger">
//                   I get it you are in hurry! But every Field is important!
//                 </Alert>
//               )}
//   </form>
// ) : (
//   <Signin />
// )}
//         </div>
//     </>
//   );
// }

// export default Signup;

// import React, { useEffect, useState } from 'react';
// import logo from '../image/logo.png';
// import { Link, useNavigate } from 'react-router-dom';
// import './Signup.css';

// function Signup() {
//     const [firstName, setfirstName] = useState("")
//     const [lastName, setlastName] = useState("")
//     const [email, setemail] = useState("")
//     const [password, setpassword] = useState("")
//     const [newuser, setnewuser] = useState([])
//     const [require, setrequire] = useState()
//     const [requiremail, setrequiremail] = useState()
//     const [passwordlenght, setpasswordlenght] = useState()
//     const [loading, setloading] = useState(false);
//     const [smallloader, setsmallloader] = useState(false)

//     useEffect(() => {
//         setloading(true)
//         setTimeout(() => {
//             setloading(false)
//         }, 2500)
//     }, [])

//     const navigateto = useNavigate();

//     const signUp = () => {
//         if (firstName === '' || lastName === '' || email === '' || password === '') {
//             setrequire('There is something wrong , a field is required!')
//             return
//         }
//         else if (!email.includes("@")) {
//             setrequiremail('please enter a valid Email Address')
//         }
        // else if (password.length < 4) {
        //     setpasswordlenght('password length must be at least four characters')
        // }
//         else {
//             setsmallloader(true)
//             setTimeout(() => {
//                 setsmallloader(false)
//                 let newidentity = { firstName, lastName, email, password }
//                 setnewuser([...newuser, newidentity])
//                 setfirstName("")
//                 setlastName("")
//                 setemail("")
//                 setpassword("")
//                 localStorage.newUser = JSON.stringify(newidentity)

//                 navigateto("/Signin")
//             }, 2500)

//         }
//     }

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
//                         <h5 className='welcome'>Welcome <br /> Sign up </h5>
//                         <div className='text-danger'>{require}</div>
//                         <div className='text-danger'>{passwordlenght}</div>
//                         <div className='text-danger'>{requiremail}</div>
//                         <div className='form'>
//                             <input type="text" placeholder='First Name' onChange={(e) => setfirstName(e.target.value)} value={firstName} className='input' />
//                             {/* <div className='text-danger'>{require}</div> */}

//                             <input type="text" placeholder='Last Name' onChange={(e) => setlastName(e.target.value)} value={lastName} className='input' />
//                             {/* <div className='text-danger'>{require}</div> */}

//                             <input type="email" placeholder='Email Address' onChange={(e) => setemail(e.target.value)} value={email} className='input' />
//                             {/* <div className='text-danger'>{require}</div>
//                             <div className='text-danger'>{requiremail}</div> */}

//                             <input type="password" placeholder='Password' onChange={(e) => setpassword(e.target.value)} value={password} className='input' />

                            // {!smallloader?<button onClick={signUp}>Sign Up</button>:
                            // <span class="loader"><span class="loader-inner"></span></span>}
//                             <br />

//                             <p className='else'>Already have an account? <a href="./signin">Sign In</a></p>
//                         </div>
//                     </div>
//                     <br />
//                     <div className="home-main-circle-1"></div>
//                     <div className="home-main-circle-2"></div>
//                     <div className="home-main-circle-3"></div>
//                 </body>}

//         </>
//     )
// }

// export default Signup
