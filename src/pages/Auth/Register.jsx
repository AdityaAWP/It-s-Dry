import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { register } from "../../redux/slice/authSlice.js";

const Register = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(register(formData));
    if (!result.error) {
      navigate("/login");
    }
  };
  return (
    <Layout>
      <div className="h-screen flex flex-col justify-center items-center bg-primary">
        <div className="flex items-center justify-center">
          <img src={Logo} className="w-1/6" alt="" />
          <h1 className="font-jersey text-2xl font-bold underline">Its Dry</h1>
        </div>
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h1 className="text-center font-condensed font-bold uppercase text-3xl my-3">
              Sign Up
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="name"
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col gap-5 items-center justify-between">
              <button
                className="bg-accent hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isLoading ? "Loading...." : "Sign up"}
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
