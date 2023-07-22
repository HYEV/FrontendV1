import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Logo from './assets/logo.png'
import Banner from './assets/banner.jpeg'
import Section1 from './assets/9078266.jpg'
import Section2 from './assets/jacques-philippe-gollnick-2OcnCyCWHrI-unsplash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="navbar border-bottom border-1 navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" width="60" height="60" />
          </a>
          <h2 className="logo">HYEV</h2>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-black" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">EVENTS</a>
              </li><li className="nav-item">
                <a className="nav-link text-black" href="#">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">CONTACT</a>
              </li>
            </ul>
    
          </div>
        </div>
      </nav>
      <section className="container d-flex justify-center align-items-center w-100 p-5 section">
        <div className="row w-100">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-content-center">
            <div className='d-flex justify-content-center align-content-center flex-column'>
                  <h1 className='fw-bolder title' >
                    Welcome to <br />HYEV
                  </h1>
                  <p className='desc' >
                    Go Together, Go Better...
                  </p>  
            </div>
            
          </div>
          <div className='col-md-6 col-sm-12 position-relative d-flex justify-content-center align-content-center'>
            <div className='designcircle1 circle1' style={{zIndex:"8"}}>
            </div>
            
            <div className="circle d-flex justify-content-center align-content-center overflow-hidden" style={{zIndex:"9"}}>
              <img src={Banner} className='rounded-corner' style={{height: "100%", width:"100%", objectFit:"cover"}}alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-center align-items-center w-100 p-5 section" style={{backgroundColor:"#ECECEC"}}>
        <div className="row w-100">
          
        <div className='col-md-6 position-relative d-flex justify-content-center align-content-center'>
            <div className='designcircle1 circle2' style={{zIndex:"8"}}>
            </div>
            
            <div className="circle d-flex justify-content-center align-content-center overflow-hidden">
              <img src={Section1} className='rounded-corner' style={{height: "100%", width:"100%", objectFit:"cover",zIndex: "9"}}alt="" />
            </div>
          </div>
          <div className="col-md-6 d-flex align-content-center">
            <div className='d-flex w-100 flex-column'>
              <div className='d-flex flex-column w-100'>
                  <h1 className='fw-bold text-center heading mb-3' >
                    HYEV
                  </h1>
              </div>  
                  <p className='desc' >
                  HYEV is an online events manager specifically designed for universities. We provide a platform for event managers to sell tickets, connect with sponsors, and add exciting animations to their event websites. Join us and make your university events a huge success!
                  </p>  
            </div>
            
          </div>
         
        </div>
      </section>
      <section className="d-flex container justify-content-center aliagn-items-center w-100 section p-5">
        <div className="row d-flex justify-content-center w-100">
          <div className="col-md-6 d-flex align-content-center">
            <div className='d-flex w-100 flex-column'>
              <div className='d-flex justify-content-center flex-column w-100 mb-3'>
                  <h1 className='fw-bold heading'>
                    Discover Exciting Events
                  </h1>
              </div>  
                  <p className='desc' >
                  HYEV is an online events manager specifically designed for universities. We provide a platform for event managers to sell tickets, connect with sponsors, and add exciting animations to their event websites. Join us and make your university events a huge success!
                  </p>  
            </div>
            
          </div>
          <div className='col-md-6 position-relative d-flex justify-content-center align-content-center'>
            <div className='designcircle1 circle1' style={{zIndex:"8"}}>
            </div>
            
            <div className="circle d-flex justify-content-center align-content-center overflow-hidden">
              <img src={Section2} className='rounded-corner' style={{height: "100%", width:"100%", objectFit:"cover",zIndex: "9"}}alt="" />
            </div>
          </div>
         
        </div>
      </section>
      <section className="d-flex justify-center align-items-center w-100 p-5 section" style={{backgroundColor:"#ECECEC"}}>
        <div className="row w-100">
          
        <div className='col-md-6 position-relative d-flex justify-content-center align-content-center'>
            <div className='designcircle1 circle2' style={{zIndex:"8"}}>
            </div>
            
            <div className="circle d-flex justify-content-center align-content-center overflow-hidden">
              <img src={Section1} className='rounded-corner' style={{height: "100%", width:"100%", objectFit:"cover",zIndex: "9"}}alt="" />
            </div>
          </div>
          <div className="col-md-6 d-flex align-content-center">
            <div className='d-flex w-100 flex-column justify-content-center'>
              <div className='d-flex justify-content-center flex-column w-100'>
                  <h1 className='fw-bold mb-3 heading'>
                    Connect with sponsers
                  </h1>
              </div>  
                  <p className='desc'  >
                  Connect with sponsors who are interested in supporting university events and take your event to the next level.
                  </p>  
            </div>
            
          </div>
         
        </div>
      </section>
      <section className="d-flex justify-center mt-5 flex-column align-items-center w-100 p-5" style={{marginBottom:"100px"}}>
              <h1 className='fw-bold mb-3 heading'> 
                  About HYEV
              </h1>
              <p  className='text-center desc'>
              HYEV is a comprehensive online events management platform designed specifically for universities. Our goal is to simplify the process of organizing and selling tickets for university events while providing a seamless experience for event managers and attendees.
              </p>  
      </section>
      <section className='p-5 w-100' style={{backgroundColor:"#BFDAF7"}}>
        <h3 className='text-center' style={{fontWeight:"700",color:""}}>
        Experience the Next Level of Event Management
        </h3>
      </section>
      <footer className='w-100 h-100 p-5 mt-5'>
        <div className='mb-5'>
        <ul className="navbar-nav d-flex md:flex-row justify-content-around ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-black" href="#">PRIVACY POLICY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">EVENTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">CONTACT</a>
              </li>
            </ul>
        </div>
        <div className='d-flex w-100 justify-content-center align-items-center'>
          <div>
            <img src={Logo} style={{width:"100px", height:"100px"}} alt="" srcset="" />
          </div>
          <div className=' d-flex flex-column align-items-center justify-content-center'>
            <h3 className='logo'>
            HYEV
            </h3>
            <div className='d-flex justify-content-around'>
              <a href="#" className='text-black'>
                <FontAwesomeIcon icon={faFacebookSquare} size='2xl' className='m-2'/>
              </a>
              <a href="#" className='text-black'>
                <FontAwesomeIcon icon={faTwitter} size='2xl'  className='m-2'/>
              </a>
              <a href="#" className='text-black'>
                <FontAwesomeIcon icon={faGoogle} size='2xl'  className='m-2'/>
              </a>
              <a href="#" className='text-black'>
                <FontAwesomeIcon icon={faInstagram} size='2xl'  className='m-2'/>
              </a>
            </div>
          </div>
         
        </div>
        
        
      
      </footer>
    </>
  );
}

export default App;
