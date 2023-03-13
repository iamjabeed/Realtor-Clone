import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
const ForgotPass = () => {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mt-6 font-bold text-center text-lg">Forgot Password</h1>
      <div className=" mx-5 my-4 flex justify-between items-center flex-wrap">
        <div className="md:w-[50%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbiUyMGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="image"
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full md:w-[40%] lg:w-[40%] lg:ml-10 rounded-sm ">
          <form>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email Address"
              onChange={onChange}
              className="w-full text-gray-700 my-1 border-gray-400 rounded"
            />
            <div className="flex justify-between items-center text-sm whitespace-nowrap my-4">
              <p>
                Don't have an account?{" "}
                <Link to={"/sign-up"} className="text-red-600">
                  Register
                </Link>
              </p>
              <p className="text-[#1D4ED8]">
                <Link to={"/sign-in"}>sign in instead</Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white py-[5px] shadow-md uppercase hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 transition ease-in-out text-sm md:text-base"
              type="submit"
            >
              sent reset password
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

export default ForgotPass;
