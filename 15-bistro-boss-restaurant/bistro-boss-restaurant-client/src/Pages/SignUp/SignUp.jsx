// import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, profileUpdate } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        // stored user auth info
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
        profileUpdate(data.name, data.photoURL);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="my-14 flex justify-center items-center flex-col">
      <Helmet>
        <title>Kacchi bhai | Sign Up</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="text-center font-semibold text-3xl">Sign up now !</h1>
        <div className="flex-column">
          <label>Name </label>
        </div>
        <div className="inputForm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            viewBox="0 0 32 32"
            height={20}
          >
            <g data-name="Layer 3" id="Layer_3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
            </g>
          </svg>
          <input
            {...register("name", { required: true })}
            name="name"
            placeholder="Enter your Name"
            className="input"
            type="text"
          />
        </div>
        {errors.name && (
          <span className="text-red-500">This field is required</span>
        )}
        <div className="flex-column">
          <label>Email </label>
        </div>
        <div className="inputForm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            viewBox="0 0 32 32"
            height={20}
          >
            <g data-name="Layer 3" id="Layer_3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
            </g>
          </svg>
          <input
            {...register("email", { required: true })}
            name="email"
            placeholder="Enter your Email"
            className="input"
            type="email"
          />
        </div>
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}
        <div className="flex-column">
          <label>Photo URL </label>
        </div>
        <div className="inputForm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            viewBox="0 0 32 32"
            height={20}
          >
            <g data-name="Layer 3" id="Layer_3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
            </g>
          </svg>
          <input
            {...register("photoURL", { required: true })}
            name="photoURL"
            placeholder="Enter your PhotoURL"
            className="input"
            type="text"
          />
        </div>
        {errors.photoURL && (
          <span className="text-red-500">This field is required</span>
        )}
        <div className="flex-column">
          <label>Password </label>
        </div>
        <div className="inputForm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            viewBox="-64 0 512 512"
            height={20}
          >
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
          </svg>
          <input
            {...register("password", {
              required: true,

              maxLength: 20,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/,
            })}
            name="password"
            placeholder="Enter your Password"
            className="input"
            type="password"
          />
        </div>
        {errors.password?.type === "required" && (
          <span className="text-red-500">Password is required</span>
        )}
        {errors.password?.type === "minLength" && (
          <span className="text-red-500">Password must be 6 charecter</span>
        )}
        {errors.password?.type === "pattern" && (
          <span className="text-red-500">
            password shoud be at least 6 characters, at least one uppercase
            letter, one lowercase letter, and one number and one spicial
            charecter
          </span>
        )}
        <div className="flex-row">
          <div>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label id="checkbox" name="checkbox" className="ml-2">
              Remember me
            </label>
          </div>
          <span className="span">Forgot password?</span>
        </div>
        <button className="button-submit">Sign Up</button>
        <p className="p">
          Donot have an account ?
          <Link to={"/signin"}>
            <span className="span">Sign Up</span>
          </Link>
        </p>
        <p className="p line">Or With</p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
