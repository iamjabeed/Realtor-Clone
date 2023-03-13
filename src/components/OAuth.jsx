import React from "react";
import { FcGoogle } from "react-icons/fc";
const OAuth = () => {
  return (
    <button className="flex justify-center items-center w-full bg-red-600  text-white py-[5px] shadow-md uppercase hover:bg-red-700 hover:shadow-lg active:bg-red-800 transition ease-in-out text-sm md:text-base">
      <FcGoogle className="mr-2 "/>
      continue with google
    </button>
  );
};

export default OAuth;
