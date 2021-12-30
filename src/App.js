import React from 'react'
import './App.css';
import Home from './Screen/Home';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function App() {
  return (
    <div className="App">
      <div className="Header">
        <div>
          <div className="Logo"> Amazon Clone </div>
        </div>
        <div className="Search">
          <input type="Text" placeholder="Search Product"></input>
          <div className="Search_icon">
            <FaSearch size="20px" />
          </div>
        </div>
        <div className="Icons">
          <div><FaShoppingCart color="white" size="25px" /></div>
          <div><FaUserCircle color="white" size="25px" /></div>
        </div>
      </div>
      <div className="Categories">
        <div>Mobile</div>
        <div>Laptop</div>
        <div>Monitor</div>
        <div>Computer Accessories</div>
        <div>Earphones</div>
      </div>
      <p></p>
      <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      draggable
      focusOnSelect={false}
        infinite
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop:{
            breakpoint:{
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max:3000,
              min: 1024
            },
            items: 1
          },
        }}
        showDots
        sliderClass=''
        slidesToSlide={1}
        swipeable
        >
        <img 
          src="images/slider1.jpg"
          style={{
            display: "block",
            height: "35rem",
            margin: "auto",
            width:"100%",
            objectFit:"fill",  
          }}
          alt=""
          />
        <img
          src="images/slider2.jpg"
          style={{
            display: "block",
            height: "35rem",
            margin: "auto",
            width: "100%",
            objectFit: "fill",
          }}
          alt=""
        />
        <img 
          src="images/slider3.jpg"
          style={{
            display: "block",
            height: "35rem",
            margin: "auto",
            width: "100%",
            objectFit: "fill",
          }}
          alt=""
        />
        <img 
          src="images/slider4.jpg"
          style={{
            display: "block",
            height: "35rem",
            margin: "auto",
            width: "100%",
            objectFit: "fill",
          }}
          alt=""
        />
        </Carousel>
        <p></p>
        <br></br>
        <p></p>
        <Home/>
    </div>
  );
}

export default App;


