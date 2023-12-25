import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainForm from '../components/MainForm'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeCarousel from '@/components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <main>
      <div className="page" id="page1">
        <div className="background" id="home">
          <div className="content-container">
            <h1>Creative Web Solutions</h1>
            <p>Bringing Your Digital Vision to Life</p>
            <button>Create Your Website!</button>
          </div>
        </div>
        <div className="advert" id="home">
          <div className="content-container" id="advert">
          </div>
        </div>
      </div>
      {/* page2 */}
      <div className="page" id="web_solutions">
        <div className="content-container" id="cont1">
          <h1>Diverse Technology Services</h1>
        </div>
        <div className="content-container" id="cont2">
          <div className="table1" id="col1">
          <h2>Innovative Web Design</h2>
            <p>Elevate your brand with bespoke designs. Our unique web solutions ensure functionality, responsiveness, and style that captivates your audience and underscores your online presence. </p>
          </div>
          <div className="table1" id="col2">
            <h2>Advanced Programming</h2>
            <p>Develop your business with our customized software services. We specialize in creating advanced software that streamlines business processes, increases efficiency, and provides scalable solutions tailored to your expectations. </p>
          </div>
          <div className="table1" id="col3">
            <h2>Application Development</h2>
            <p>Transform your ideas into reality with our app development services. We offer comprehensive solutions in designing and developing mobile and desktop applications that are intuitive, fast, and tailored to the needs of your company and clients. </p>
          </div>
        </div>
      </div>
      <div className="page" id="case_studies">
        <div className="content-container" id="cont3">
          <div className="table2" id="col2">
            <h2>Crafting Your Visual Identity</h2>
            <p>Transform your brand's presence with our visual identity design services. We focus on creating a distinctive brand image that captures attention and engages your audience. With a blend of creativity and strategy, we design visual elements that are not only aesthetically pleasing but also communicate your brand's core message. Let us help you make a lasting impression in the digital landscape. </p>              
              <button >Discover projects</button>
          </div>
          <div className="table2" id="col1">
            <HomeCarousel />
          </div>
        </div>
      </div>
      <div className="page" id="form">
        <div className="content-container" id="cont4">
          <div className="table3" id="col1">
            <div className="form">
              <div className="circle">
                <FontAwesomeIcon icon={faEnvelope} className='fa-2x' color='#fff' />
              </div>
              <MainForm />
              
              {/* <button>Continue</button> */}
            </div>
          </div>
          <div className="table3" id="col2">
            <p>Create Your Website</p>
            <h2>Fill in the form and we'll take care of the rest!</h2>
          </div>          
        </div>
      </div>
      <div className="page" id="contact">
      <div className="content-container" id="cont4">
          <div className="table4" id="col1">
            </div>
          </div>
          <div className="table4" id="col2">
          </div>          
        </div>
    </main>
  )
}