import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import More from './More/More';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <More></More>
            <About></About>
        </div>
    );
};

export default Home;