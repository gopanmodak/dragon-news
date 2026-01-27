import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../provider/AuthProvider";
import auth from "./../components/firebase/firebase.config";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [errorMessage, setErrormessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleOnFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photoUrl = event.target.photoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const checkbox = event.target.checkbox.checked;
    setErrormessage("");
    setSuccessMessage("");

    if (!checkbox) {
      setErrormessage("Please agree to the terms and conditions");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMessage("User created successfully");
        setErrormessage(" ");
        const profile = { displayName: name, photoURL: photoUrl };
        updateProfile(auth.currentUser, profile).then(() => {
          setSuccessMessage("User created successfully");
        });
      })
      .catch((error) => {
        console.log(error.message);
        setErrormessage(error.message);
        setSuccessMessage("");
      });

    console.log(name, photoUrl, email, password, checkbox);
  };
  return (
    <div className="max-h-screen flex justify-center items-center flex-col bg-base-200 p-4 mt-10 ">
      <div className="card bg-base-100  shadow-2xl">
        <div className="card-body flex flex-col justify-center items-center">
          <p className="text-center font-bold mb-6 text-2xl">
            Register your account
          </p>

          <form className="space-x-4" onSubmit={handleOnFormSubmit}>
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-bold text-black mb-3">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-bold text-black mb-3">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photoUrl"
                className="input input-bordered"
                placeholder="Enter your photo url"
              />
            </div>
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-bold text-black mb-3">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Enter your email"
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
                placeholder="Create your password"
                required
              />
            </div>

            <span className="flex items-center gap-2 mt-2.5">
              <input
                type="checkbox"
                name="checkbox"
                id=""
                className="checkbox"
              />
              <p className="text-sm font-semibold">
                Accept terms and conditions
              </p>
            </span>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral w-full">
                Register
              </button>
            </div>
          </form>

          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {successMessage && <p className="text-green-600">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
