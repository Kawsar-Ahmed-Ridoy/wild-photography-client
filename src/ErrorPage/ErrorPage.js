import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div style={{height: "100vh"}} className="flex  justify-center align-middle w-full text-center  ">
 
       <div className='my-auto ' >
            <h1 style={{fontSize: "100px", fontWeight:"bold"}} >404</h1>
            <h4 className='font-bold mb-4'>Sorry, we couldn't find this page!</h4>
            <Link to={'/'}><button className='btn btn-outline'>Back To Home Page</button></Link>
        </div> 
</div>
    );
};

export default ErrorPage;