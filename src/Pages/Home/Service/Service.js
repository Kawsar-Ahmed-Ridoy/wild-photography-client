import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard/ServiceCard';


const Service = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className='mb-16 mt-12 max-w-screen-xl mx-auto'>
            <div className='mb-8 '>
            <h1 className='text-center text-4xl font-bold '>Service</h1>
            <p className='text-center  text-gray-500'>__________________</p>
            </div>

            <div className='flex justify-around  align-middle flex-wrap '>
                {
                    service.map(servic => <ServiceCard
                    key={servic._id}
                    servic={servic}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center">
            <Link to='/services'>
            <button className='btn px-10 font-bold'>See All</button>
            </Link>
            </div>
        </div>
    );
};

export default Service;