import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import SocialLogin from "../Login/SocialLogin/SocialLogin";

const Register = () => {
  const [error, setError] = useState('')
  const { createUser, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  useTitle('Register');
  if (loading) {
    return <progress className="progress w-full "></progress>;
  }
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <div className="hero py-24">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name "
                  className="input input-bordered"
                  require
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email "
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <small className="label-text-alt link link-hover">
                    <Link to="/login">
                      Already have an account?{" "}
                      <span className="font-bold">Login</span>
                    </Link>
                  </small>
                </label>
                <small className="ml-1 text-red-600">{error}</small>
              </div>
              <div className="form-control ">
                <input
                  className="btn btn-outline px-36"
                  type="submit"
                  value="Register"
                />
              </div>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
