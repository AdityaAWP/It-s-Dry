import React from "react";
import Layout from "../../layouts/Layout";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Layout>
      <div className="h-screen flex flex-col justify-center items-center bg-primary">
        <div className="flex items-center justify-center">
          <img src={Logo} className="w-1/6" alt="" />
          <h1 className="font-jersey text-2xl font-bold underline">Its Dry</h1>
        </div>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-center font-condensed font-bold uppercase text-3xl my-3">
              Sign Up
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col gap-5 items-center justify-between">
              <button
                className="bg-accent hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
              <p
                className="inline-block align-baseline font-bold text-sm text-accent hover:text-green-900"
                href="#"
              >
                Already Have Account?
                <Link to={"/login"}>
                  <span className="underline"> Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
