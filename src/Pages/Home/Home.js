import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import More from './More/More';
import Services from './Service/Service';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <More></More>
            <About></About>
        </div>
    );
};

export default Home;