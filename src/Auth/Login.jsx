import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/loginbackend.jpeg"
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg,seterrmsg]=useState("")
  const navi = useNavigate();

 const handlelogin = async () => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/v1/login",
      {
        email,
        password,
      },
      {
        withCredentials: true, // 🔥 REQUIRED for cookies
      }
    );

    console.log(res.data);

    if (res.data.success === true) {
      localStorage.setItem("token", res.data.token);
      navi("/allproducts");

    }
  } catch (err) {
    console.error(err);
    seterrmsg("Invalid credentials");
  }
};
  return (
    <div
      className="h-screen flex flex-col justify-center items-center gap-6"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <p className="font-semibold text-3xl text-center">
        Welcome back, we’ve missed your glow!
      </p>

      <div className="flex flex-col gap-5">
        <input
          className="border px-4 py-2 w-[300px] outline-none rounded-lg"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border px-4 py-2 w-[300px] outline-none rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handlelogin}
          className="bg-black text-white px-4 py-2 rounded-lg font-semibold"
        
        >
          Login
        </button>

       <p className="font-semibold text-red-500">{errmsg}</p>

        <p className="text-center font-semibold">
          New to Aurora?{" "}
          <Link to="/register" className="text-amber-950 font-semibold">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
