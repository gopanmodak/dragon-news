import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const navigate=useNavigate();
  const { userLogin } = useContext(AuthContext);
  const [successfully, setSuccessMessage] = useState("");
  const [errorMessage, setErrormessage] = useState("");
  const handleOnFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setSuccessMessage("");
    setErrormessage("");
    userLogin(email, password).then(() => {
      setSuccessMessage("User logged in successfully");
      setErrormessage("");
      navigate("/");
      event.target.reset()
    })
    
    .catch((error) => {
      console.log(error.message);
      setErrormessage('User not found');
    });

    console.log(email, password);
  };
  return (
    <div className="max-h-screen grid place-items-center  p-4 mt-10">
      <div className="card  max-w-md shadow-2xl">
        <div className="card-body justify-center items-center">
          <p className="text-center font-bold mb-6 text-2xl">
            Login your account
          </p>

          <form className="space-y-4 " onSubmit={handleOnFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-black mb-3">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-bold text-black mb-3">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
                placeholder="Enter your password"
                required
              />
              <label className="label">
                <Link className="label-text-alt link link-hover mt-2">
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral w-full">
                Login
              </button>
            </div>
          </form>

          <p className="text-center mt-6 font-semibold">
            Don't have an account ?{" "}
            <Link className="link link-hover text-red-700" to="/auth/signup">
              Sign Up
            </Link>
          </p>

          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {successfully && <p className="text-green-600">{successfully}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
