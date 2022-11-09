import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const detail = useLoaderData()
console.log(detail);
    return (
        <div>
            <h1 className='text-4xl'>details</h1>
            <h2 className='text-4xl'>{detail.length}</h2>
        </div>
    );
};

export default CardDetails;