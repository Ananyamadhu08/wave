import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../features";
import { useToast } from "../hooks";

const initialLoginState = {
  email: "",
  password: "",
};

const Login = () => {
  const [userData, setUserData] = useState(initialLoginState);

  const dispatch = useDispatch();

  const { showToast } = useToast();

  let location = useLocation();

  let navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  let navigateTo = () => navigate(from, { replace: true });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "remember-me") {
      setUserData({ ...userData, [name]: e.target.checked });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ ...userData, showToast, navigateTo }));
  };

  return (
    <div className="w-full bg-slate-900 min-h-screen flex flex-col sm:justify-center justify-center items-center pt-6 sm:pt-0">
      <h2 className="text-cyan-500  text-center text-4xl font-extrabold">
        Login to your account
      </h2>
      <div className="w-full sm:max-w-md px-10 py-10 text-cyan-500 rounded-xl">
        <form onSubmit={handleSubmit}>
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
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" type="checkbox" onChange={handleChange} />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm leading-5 "
              >
                {" "}
                Remember me{" "}
              </label>
            </div>
            <Link to="#" className="text-sm">
              {" "}
              Forgot password{" "}
            </Link>
          </div>
          <div className="mt-6">
            <button className="w-full inline-flex items-center justify-center  py-3 bg-cyan-500 border-transparent rounded-md font-semibold text-xl text-slate-900 hover:bg-cyan-700">
              Login
            </button>
          </div>
          <div className="mt-6 text-center">
            <Link to="#" className="underline">
              Sign up for an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
