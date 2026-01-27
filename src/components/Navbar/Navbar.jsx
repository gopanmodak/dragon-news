import React, { useContext } from "react";
import { Link } from "react-router-dom";

import userImg from "../../assets/user.png";
import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
  const { currentUser, userSignOut } = useContext(AuthContext);

  const handleOnSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="md:flex justify-between py-5 items-center">
      <div></div>

      <div className="flex space-x-4">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/career"> Career </Link>
      </div>

      {currentUser ? (
        <div className="flex space-x-5 items-center">
          {" "}
          <div className="flex space-x-2 items-center">
            <img
              src={currentUser.photoURL}
              alt="user"
              className="w-10 rounded-full"
            />
            <p className="font-semibold">{currentUser.displayName ||'User'}</p>
          </div>{" "}
          <Link
            to="/auth/login"
            onClick={handleOnSignOut}
            className="btn btn-ghost"
          >
            Log Out
          </Link>
        </div>
      ) : (
        <div className="flex space-x-5 items-center">
          <img src={userImg} alt="" className="w-8" />
          <Link
            to="/auth/login"
            type="button"
            className="text-white bg-gray-900 hover:bg-gray-800  focus:ring-gray-300 shadow-sm font-medium leading-5  text-sm px-4 py-2 focus:outline-none"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
