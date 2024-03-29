import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useToast } from "../hooks";
import { registerUser } from "../features";

const initialLoginState = {
  fullName: "",
  userName: "",
  email: "",
  password: "",
  confirm_password: "",
  gender: "",
};

const Register = () => {
  const [userData, setUserData] = useState(initialLoginState);

  const dispatch = useDispatch();

  const { showToast } = useToast();

  let location = useLocation();

  let navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  let navigateTo = () => navigate(from, { replace: true });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ ...userData, showToast, navigateTo }));
  };

  return (
    <div className="w-full bg-slate-900 min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <h2 className="text-center text-cyan-500 text-4xl font-extrabold">
        Create Your Account
      </h2>
      <div className="w-full sm:max-w-md px-10 py-10 text-cyan-500 rounded-xl">
        <form onSubmit={handleSubmit}>
          <input
            id="fullName"
            type="text"
            name="fullName"
            className="py-2 px-3 border border-cyan-500 focus:border-cyan-700 focus:outline-none focus:ring focus:ring-cyan-800 focus:ring-opacity-20 rounded-md shadow-md mb-5 block w-full"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            id="userName"
            type="text"
            name="userName"
            className="py-2 px-3 border border-cyan-500 focus:border-cyan-700 focus:outline-none focus:ring focus:ring-cyan-800 focus:ring-opacity-20 rounded-md shadow-md mb-5 block w-full"
            placeholder="User Name"
            onChange={handleChange}
          />

          <input
            id="email"
            type="text"
            name="email"
            className="py-2 px-3 border border-cyan-500 focus:border-cyan-700 focus:outline-none focus:ring focus:ring-cyan-800 focus:ring-opacity-20 rounded-md shadow-md mb-5 block w-full"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            id="password"
            type="password"
            name="password"
            className="py-2 px-3 border border-cyan-500 focus:border-cyan-700 focus:outline-none focus:ring focus:ring-cyan-800 focus:ring-opacity-20 rounded-md shadow-md mb-5 block w-full"
            placeholder="password"
            onChange={handleChange}
          />

          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            className="py-2 px-3 border border-cyan-500 focus:border-cyan-700 focus:outline-none focus:ring focus:ring-cyan-800 focus:ring-opacity-20 rounded-md shadow-md mb-5 block w-full"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          <div className="flex justify-start">
            <div className="form-check form-check-inline mr-5">
              <input
                className="appearance-none rounded-full h-4 w-4 border text-cyan-100 bg-white checked:bg-cyan-800 checked:border-cyan-800 mt-1 align-top mr-1 cursor-pointer"
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={handleChange}
              />
              <label
                className="form-check-label inline-block text-cyan-100"
                htmlFor="male"
              >
                male
              </label>
            </div>
            <div className="form-check form-check-inline  mr-5">
              <input
                className="appearance-none rounded-full h-4 w-4 border text-cyan-100 bg-white checked:bg-cyan-800 checked:border-cyan-800 mt-1 align-top mr-1 cursor-pointer"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={handleChange}
              />
              <label
                className="form-check-label inline-block text-white"
                htmlFor="female"
              >
                female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="appearance-none rounded-full h-4 w-4 border text-cyan-100 bg-white checked:bg-cyan-800 checked:border-cyan-800 mt-1 align-top mr-1 cursor-pointer"
                type="radio"
                name="gender"
                id="other"
                value="other"
                onChange={handleChange}
              />
              <label
                className="form-check-label inline-block text-white"
                htmlFor="other"
              >
                other
              </label>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full inline-flex items-center justify-center  py-3 bg-cyan-500 border-transparent rounded-md font-semibold text-xl text-slate-900 hover:bg-cyan-700">
              Sign Up
            </button>
          </div>
          <div className="mt-6 text-center">
            <Link to="/login" className="underline">
              Login with existing account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
