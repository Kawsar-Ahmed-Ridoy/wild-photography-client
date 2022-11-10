import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const {googleSignIn , setLoading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            const currentUser = {
                email: user.email
            }
            fetch('http://localhost:5000/jwt', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('userToken')}`
            },
            body: JSON.stringify(currentUser)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setLoading(false)
            localStorage.setItem("userToken", data.token)
            navigate(from,{replace: true});
          })

        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="form-control ">
          <button onClick={handleGoogleSignIn} className="btn ">Google Login</button>
        </div>
        </div>
    );
};

export default SocialLogin;