import React, { useContext } from "react";
import { UserInfo } from "../states/UserInfoContext";
import { useNavigate } from "react-router-dom";

function FormInfo() {
  const { setUsername, setEmail, setPassword } = useContext(UserInfo);
  const navigate = useNavigate();

  return (
    <div className="mt-[15%] flex flex-col items-center justify-center w-full max-w-md mx-auto p-5 shadow-md bg-slate-700 rounded">
      <div>
        <label className="text-white" htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          className="w-full p-2 mb-4 text-base rounded border border-gray-300"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="text-white" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="w-full p-2 mb-4 text-base rounded border border-gray-300"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text-white" htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="w-full p-2 mb-4 text-base rounded border border-gray-300"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          type="submit"
          onClick={() => navigate("/card")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default FormInfo;
