import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import {  updateProfile } from "firebase/auth";

const SignUp = () => {
  
  const navigate = useNavigate();
  const axiosPublic =  useAxiosPublic();

    const { createUser, updateUserProfile } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    createUser( data.email, data.password )
    .then( result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        updateUserProfile(data.name, data.PhotoURL)
        .then(()=>{
          // create user entry in the database
          const  userInfo ={
            name: data.name,
            email: data.email
          }
          axiosPublic.post('/users', userInfo)
          .then((res)=>{
            console.log('user added to the database')
            if(res.data.insertedId){
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
            }
          })
         
        })
        .catch(err => console.log(err))
        
    } )
  };



  return (
    <div className="hero min-h-screen ">
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl  font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
                name="name"
              />
              {errors.name && <span className="text-red-500 text-xs mt-2">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                placeholder="PhotoURL"
                className="input input-bordered"
                {...register("PhotoURL", { required: true })}
                name="PhotoURL"
              />
              {errors.PhotoURL && <span className="text-red-500 text-xs mt-2">PhotoURL is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500 text-xs mt-2">Email is required</span>}
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
                {...register("password", { required: true,
                    minLength:6,
                     maxLength: 16,
                     pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}/
                     })}
              />
              {errors.password?.type === 'required' && <span className="text-red-500 text-xs mt-2">Password is required</span>}
              {errors.password?.type === 'minLength' && <span className="text-red-500 text-xs mt-2">Password must be longer than 6 character </span>}
              {errors.password?.type === 'maxLength' && <span className="text-red-500 text-xs mt-2">Password should not be longer than 16 character </span>}
              {errors.password?.type === 'pattern' && <span className="text-red-500 text-xs mt-2">Password must have one uppercase, one lowercase , one number and one special character </span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center mb-4">
            <small className="text-sky-900">
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
