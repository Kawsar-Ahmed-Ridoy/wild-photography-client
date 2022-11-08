import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCardAll from './ServiceCardAll/ServiceCardAll';
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
            <h1 className='text-center text-4xl font-bold '>Services</h1>
            <p className='text-center  text-gray-500'>__________________</p>
            </div>

            <div className='flex justify-around  align-middle flex-wrap '>
                {
                    service.map(servic => <ServiceCardAll
                    key={servic.id}
                    servic={servic}
                    ></ServiceCardAll>)
                }
            </div>
        </div>
    );
};

export default Service;