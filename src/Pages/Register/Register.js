import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero py-24">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register</h1>
    </div>
    <div className="card w-full max-w-sm shadow-2xl bg-base-100 ">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name " className="input input-bordered" require/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email " className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password? <Link to='/login'>Already have an account?</Link></a>
            
          </label>
        </div>
        <div className="form-control ">
        <input className="btn px-36" type='submit' value='Register'/>
        </div>
        <div className="form-control ">
          <button className="btn btn-outline">Google Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;