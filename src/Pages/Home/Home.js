import React from "react";
import useTitle from "../../hooks/useTitle";
import About from "./About/About";
import Banner from "./Banner/Banner";
import More from "./More/More";
import Service from "./Service/Service";

const Home = () => {
    useTitle('Home');
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <More></More>
      <About></About>
    </div>
  );
};

export default Home;
