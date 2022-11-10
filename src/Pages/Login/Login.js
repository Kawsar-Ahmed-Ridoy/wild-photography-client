import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
  const {login , loading, setLoading} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  if(loading){
    return <progress className="progress w-full "></progress>
}
  const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);

          const currentUser = {
            email: user.email
          }

          console.log(currentUser);

          fetch('http://localhost:5000/jwt', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem("userToken", data.token)
          })

          // navigate(from,{replace: true});
        })
        .catch(err => console.error(err))
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
            <small className="label-text-alt link link-hover">Forgot password? <Link to='/register'><span className='font-bold'> Register</span></Link></small>
            
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