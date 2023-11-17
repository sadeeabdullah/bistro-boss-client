import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleLogin from "../../Component/SocailLogin/GoogleLogin";



const Login = () => {

    const [disable , setDisable ] = useState(true)

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(( ) => {
        loadCaptchaEnginge(6); 
    } ,[])

    const handleLogin = ( e ) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        signIn( email, password )
        .then( result => {
            const user = result.user;
            console.log(user)
            Swal.fire({
                title: "user Login successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              navigate(from,{replace:true})
        })
    }


    const handleValidateCaptcha = ( e ) => {
        const user_capthca_value = e.target.value;
        console.log(user_capthca_value)
        if(validateCaptcha(user_capthca_value)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
        
    }

  return (
    <div  className="hero min-h-screen ">
    <Helmet>
        <title>Bistro Boss | Login</title>
    </Helmet>
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl  font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                onBlur={handleValidateCaptcha}
                placeholder="type the text above"
                className="input input-bordered"
                name="captcha"
                required
              />
             
            </div>
            
            <div className="form-control mt-6">
              <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
            </div>
            
          </form>
          <p className="text-center mb-4"><small className="text-sky-900">New here? <Link to='/signUp'>
          Create an account</Link></small></p>
        <div className="divider"></div>
            <div className="flex justify-center items-center mb-8">
            <GoogleLogin className="text-red-700"></GoogleLogin>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
