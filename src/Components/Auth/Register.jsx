import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const url = "http://localhost:5000/auth/register";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const PostRegister = async () => {
    try {
      await axios.post(url, {
        username: username,
        password: password,
      });
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  const onRegister = () => {
    PostRegister();
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-gray-100">
      <div className="flex flex-col p-[30px] gap-10 w-[400px] h-[500px] bg-white rounded-xl shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        <h1 className="text-2xl font-bold text-blue-400">Register</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="border-2 py-4 text-xl px-3 border-black opacity-50 rounded-xl"
          placeholder="Username"
          type="text"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 py-4 text-xl px-3 border-black rounded-xl opacity-50"
          placeholder="Password"
          type="password"
        />
        {error && <h1 className="text-red-500">{error}</h1>}
        <button
          onClick={onRegister}
          className="py-3 px-3 rounded-xl text-xl text-white bg-blue-400 shadow-[0_2px_30px_rgba(8,_112,_184,_0.7)] hover:bg-white hover:text-blue-400"
        >
          Register
        </button>
        <Link className="underline text-blue-600" to={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
