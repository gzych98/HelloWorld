import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import MainForm from '../components/MainForm'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeCarousel from '@/components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import Footer from './footer';
import NavBar from './navbar';





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
      <NavBar />
      <div className="page" id="page1">
        <div className="background" id="home">
          <div className="content-container" id='home'>
            <h1>Creative Software Solutions</h1>
            <p>Bringing Your Digital Vision to Life</p>
            <a href='#form'>
              <button>Create Your Project!</button>
            </a>
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
          <div className="table2" id="col1">
            <h2>Crafting Your Visual Identity</h2>
            <p>Transform your brand&apos;s presence with our visual identity design services. We focus on creating a distinctive brand image that captures attention and engages your audience. With a blend of creativity and strategy, we design visual elements that are not only aesthetically pleasing but also communicate your brand&apos;s core message. Let us help you make a lasting impression in the digital landscape. </p>              
             
          </div>
          <div className="table22" id="col2">
            <FontAwesomeIcon icon={faRankingStar} className='myicon fa-3x' color='#333' />
            <h2>Marketing</h2>
            <p>Cut through the noise with our targeted marketing strategies. From data-driven campaigns to creative storytelling, we position your brand to achieve maximum impact and return on investment. Elevate your marketing to capture the right audience.</p>
          </div>
        </div>
      </div>
      <div className="page" id="case_studies">
        <div className="content-container" id="cont3">
          <div className="table22" id="col3">
            <FontAwesomeIcon icon={faUsers} className='myicon fa-3x' color='#333' />
            <h2>Social Media</h2>
            <p>Amplify your brand&apos;s voice across social platforms. Our team crafts engaging content and designs that resonate with your audience, fostering community and conversation. Let&apos;s make your brand the topic of social media talk.</p>
          </div>
          <div className="table22" id="col4">
            <FontAwesomeIcon icon={faPrint} className='myicon fa-3x' color='#333' />
            <h2>Print Products</h2>
            <p>Bring your ideas to life with our customised print solutions. Whether it&apos;s business cards, brochures or banners, we provide high-quality print that reflects the excellence of your brand. Connect with your offline customers with print that stands out.</p>
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
            <p>Create Your Project</p>
            <h2>Start Your Online Journey with Ease</h2>
            <h3>Welcome to the first step in creating your digital presence! Our simple form is designed to gather just the essentials, ensuring a smooth start to building your project.</h3>
            <h3>Once you click Next you&apos;ll be guided through a few more tailored choices, ensuring that every aspect of your project is aligned with your vision. Our team will then work behind the scenes, crafting a site that not only looks great but also performs flawlessly.</h3>
          </div>          
        </div>
      </div>
      <div className="page" id="contact">
        <div className="content-container" id="cont5">
        <div className="content-container" id="cont6">
          <div className='contact_data'>
            <h1>Get in Touch with Us</h1>
            <div className='contact_tab'>
              <img  src="/black_2.png"
                alt="Opis obrazu"
                width={100}
                height={100} 
                className="footer_logo"
              />
              <div className='contact_col'>
                <h2>We are here to listen and answer any questions you may have. Whether you&apos;re interested in starting a project, need help with an existing service or just want to say hello, our team is ready to give you the information and support you need. Contact us through any of the channels below and we will be sure to get back to you quickly.</h2>
                <h3>City</h3>
                <h2>Kraków, Poland</h2>
                <h3>E-mail</h3>
                <h2>office@gtcodelab.com</h2>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
