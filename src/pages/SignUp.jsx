import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mt-6 font-bold text-center text-lg">
        Hy, Welcome to the registration
      </h1>
      <div className=" mx-5 my-4 flex justify-between items-center flex-wrap">
        <div className="md:w-[50%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="image"
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full md:w-[40%] lg:w-[40%] lg:ml-10 rounded-sm ">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Full name"
              onChange={onChange}
              className="w-full text-gray-700 my-1 border-gray-400 rounded"
            />
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email Address"
              onChange={onChange}
              className="w-full text-gray-700 my-1 border-gray-400 rounded"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
                className="w-full  text-gray-700 my-1 border-gray-400 rounded transition ease-in-out "
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-4 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-4 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between items-center text-sm whitespace-nowrap my-4">
              <p>
                Have an account?{" "}
                <Link to={"/sign-in"} className="text-red-600">
                  sign in
                </Link>
              </p>
              <p className="text-[#1D4ED8]">
                <Link to={"/forgot-pass"}>Forgot password?</Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white py-[5px] shadow-md uppercase hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 transition ease-in-out md:text-base"
              type="submit"
            >
              sing up
            </button>
            <div
              className="flex items-center my-2 before:border-t before:flex-1 before:border-gray-400
          after:border-t after:flex-1 after:border-gray-400"
            >
              <p className="text-center font-semibold mx-3">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
