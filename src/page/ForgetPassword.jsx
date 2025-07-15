import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";

const ForgetPassword = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState();
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  // const { user } = useUser();
  const { user } = useContext(UserContext);

  const visible = () => {
    if (showPassword == "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const logging = async (data) => {
    alert("under development!!");
    // const api = "http://localhost:8800/api/v1/auth/login";
    // try {
    //   const res = await axios.post(api, data, { withCredentials: true });
    //   console.log(res.data);
    //   alert("Login successfully");
    //   navigate("/");
    // } catch (err) {
    //   console.log(`Error to Logging :: ${err.message}`);
    // }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  });

  return (
    <div className="w-full h-full ">
      <div className="max-w-[400px] bg-black/30  mx-auto mt-32 px-12 py-4 border border-gray-700 rounded-2xl ">
        <span
          className={`absolute top-14 left-[50%] -translate-x-[50%] ${
            status?.status == 200 ? "text-green-500" : "text-red-500"
          } `}
        >
          {status?.msg}
          {status?.status == 200 && (
            <p className="w-8 h-8 mx-auto border-4 rounded-full border-green-600 border-t-transparent animate-spin"></p>
          )}
        </span>
        <h1 className=" mt-5 mb-10 text-center text-3xl font-bold text-zinc-500">
          Forget Pasword
        </h1>
        <form onSubmit={handleSubmit((data) => logging(data))}>
          <label>
            Username
            <input
              type="text"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              {...register("username")}
            />
          </label>

          <label className="relative">
            Email
            <input
              type="email"
              className="w-full h-10 mb-5 mt-1 px-4 border rounded-md"
              {...register("email")}
            />
          </label>

          <button
            type="submit"
            className="w-full h-8 mb-5 mt-8 px-4 border rounded-md bg-white text-black hover:bg-white/80 cursor-pointer"
          >
            Forget Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
