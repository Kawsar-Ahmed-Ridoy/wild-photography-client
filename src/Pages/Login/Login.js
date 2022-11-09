import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault()
    }

    return (
        <div>
            <div className="hero py-24">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login</h1>
    </div>
    <div className="card w-full max-w-sm shadow-2xl bg-base-100 ">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered"  required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password? <Link to='/register'><span className='font-bold'> Register</span></Link></a>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-outline px-36" type='submit' value='Login'/>
        </div>
        <div className="form-control ">
          <button className="btn ">Google Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;