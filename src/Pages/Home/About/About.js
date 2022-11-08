import React from "react";

const About = () => {
  return (
    <div className="mb-16 max-w-screen-xl mx-auto">
      <div className="mb-8">
      <h2 className="text-center text-4xl font-bold ">About</h2>
      <p className='text-center  text-gray-500'>__________________</p>
      </div>
      <div className="flex justify-around text-center align-middle flex-wrap">
        <div className="card w-96 h-96 py-7 shadow-xl mb-4">
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold">
              Remote & Camera Trap Photography
            </h2>
            <p className="text-center">
              Technology has helped me to capture images of wildlife in new
              ways. In particular, remote-control cameras and camera traps have
              allowed me to get my camera closer to my subjects than ever
              before. Here are some of my favourite resulting images from across
              Africa. You can find out more about the devices used to get these
              images here:
            </p>
          </div>
        </div>

        <div className="card w-96 h-96 py-7 shadow-xl mb-4">
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold">Zambia</h2>
            <p className="text-center">
            In 2012-2013 I lived in Zambia for a year and I have since made several repeat visits to the country. I have primarily focused on documenting the wildlife of the Luangwa Valley and the region’s dramatic seasonal variations. I have also spent time in Liuwa Plain, Kafue, Kasanka and Lower Zambezi National Parks. Here are just a few of my favourite images from the country.
            </p>
          </div>
        </div>

        <div className="card w-96 h-96 py-7 shadow-xl mb-4">
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold">Meerkats</h2>
            <p className="text-center">
              I have made two trips to Botswana to photograph the Meerkats in
              the Makgadikgadi Pans region. These wild meerkats have been
              habituated to humans so it possible to get close to them.
              Sometimes they will use people as convenient lookout-posts!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
