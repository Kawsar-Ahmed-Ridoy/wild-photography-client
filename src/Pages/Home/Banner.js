import React from 'react';
import image1 from '../../asset/image1.jpg'
import image2 from '../../asset/image2.jpg'
import image3 from '../../asset/image3.jpg'

const Banner = () => {
    return (
        <div>
      <>
      <div style={{height:"90vh"}} className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full"> 
  <div className=" bg-black absolute opacity-50 h-full w-full"></div>
    <img src={image1} alt='' className="w-full" />

    <div style={{height:"90vh", textTransform:'uppercase'}} className="absolute flex justify-center align-middle w-full text-center text-6xl  font-serif text-white"><h2 className='my-auto leading-tight'>welcome to my, wild<br/>  photography <br/>website</h2></div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a>      
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  
  <div id="slide2" className="carousel-item relative w-full">
  <div className=" bg-black absolute opacity-50 h-full w-full"></div>
    <img src={image2} alt='' className="w-full" />
    <div style={{height:"90vh", textTransform:'uppercase'}} className="absolute flex justify-center align-middle w-full text-center text-6xl  font-serif text-white"><h2 className='my-auto leading-tight'>welcome to my, wild<br/>  photography <br/>website</h2></div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className=" bg-black absolute opacity-50 h-full w-full"></div>
    <img src={image3} alt='' className="w-full" />
    <div style={{height:"90vh", textTransform:'uppercase'}} className="absolute flex justify-center align-middle w-full text-center text-6xl  font-serif text-white"><h2 className='my-auto leading-tight'>welcome to my, wild<br/>  photography <br/>website</h2></div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
      </>
        </div>
    );
};

export default Banner;