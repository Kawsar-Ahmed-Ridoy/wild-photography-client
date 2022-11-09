import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard/ServiceCard';


const Service = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className='mb-16 max-w-screen-xl mx-auto'>
            <div className='mb-8'>
            <h1 className='text-center text-4xl font-bold '>Service</h1>
            <p className='text-center  text-gray-500'>__________________</p>
            </div>

            <div className='flex justify-around  align-middle flex-wrap '>
                {
                    service.map(servic => <ServiceCard
                    key={servic.id}
                    servic={servic}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center">
            <Link to='/service'>
            <button className='btn px-10 font-bold'>See All</button>
            </Link>
            </div>
        </div>
    );
};

export default Service;