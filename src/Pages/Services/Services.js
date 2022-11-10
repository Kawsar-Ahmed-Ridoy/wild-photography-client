import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ServicesCardAll from './ServicesCardAll/ServicesCardAll'
const Services = () => {
    const {loading} = useContext(AuthContext)
    
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    if(loading){
        return <progress className="progress w-full "></progress>
    }

    return (
        <div className='mb-16 max-w-screen-xl mx-auto'>
            <div className='mb-8'>
            <h1 className='text-center text-4xl font-bold '>Services</h1>
            <p className='text-center  text-gray-500'>__________________</p>
            </div>

            <div className='flex justify-around  align-middle flex-wrap '>
                {
                    services.map(service => <ServicesCardAll
                    key={service._id}
                    service={service}
                    ></ServicesCardAll>)
                }
            </div>
        </div>
    );
};

export default Services;