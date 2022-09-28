import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import './Home.css';

// import Signup from './Signup';
// import Signup from './components/Signup';
function Home() {
  return (
    <>
      <body class="container full-height-grow">
        <header class="main-header">
          <a href="/" class="brand-logo">
            <img src={logo} alt={logo} />
            <div class="brand-logo-name"></div>
          </a>
          <nav class="main-nav">
            <ul>
              <li><a href="discover.html">Discover</a></li>
              <li><a href="join1.html">Join</a></li>
            </ul>
          </nav>
        </header>

        <section class="home-main-section">
          <div class="img-wrapper">
            <div class="human-person"></div>
          </div>
          <div class="call-to-action">
            <h1 class="title">Feel The Music</h1>
            <span class="subtitle">A dozen songs in your pocket .</span>
            <Link to={"./signup"} class="btn">Join Now</Link>
          </div>
        </section>
        <div class="home-main-circle-1"></div>
        <div class="home-main-circle-2"></div>
        <div class="home-main-circle-3"></div>
      </body>
    </>
  )
}

export default Home