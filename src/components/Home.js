import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import './Home.css';
function Home() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },2500)
  }, [])

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
        <section id='body'>
          <header className='header'>
            <Link to={"./signup"} className="logo">
              <img src={logo} alt={logo} />
            </Link>
            <ul className='listitem'>
              <li><a href="discover.html">Discover</a></li>
              <li><Link to={"./signup"} className="headerbtn">Join</Link></li>
            </ul>
          </header>

          <div className='imgAndText'>
            <div className="img-wrapper">
              <div className="human-person"></div>
            </div>
            <div className="textAndBtn">
              <h1 className="title">Feel The Music</h1>
              <p className='subtitle'>A dozen songs in your pocket.</p>
              <Link to={"./signup"} className="btn">Join Now</Link>
            </div>
          </div>

          <div className="home-main-circle-1"></div>
          <div className="home-main-circle-2"></div>
          <div className="home-main-circle-3"></div>
          <div className="home-main-circle-4"></div>
        </section>}
    </>
  )
}

export default Home