import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginPage = () => {
  const [username, setUsername] = useState("AdminUserTest");
  const [password, setPassword] = useState("Qwerty123");
  const [bearerToken, setBearerToken] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    var authUser = {
      username: username,
      password: password,
    };

    axios
      .post(process.env.REACT_APP_SERVER_URL + "/Login", authUser)
      .then((response) => {
        console.log(response.data.token);
        setBearerToken(`bearer ${response.data.token}`);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      });

    console.log("Giriş Yapan Kullanıcı: " + JSON.stringify(authUser));
  };

  return (
    <div className="flex flex-col justify-center items-center m-0 w-full h-screen px-5 sm:mx-0">
      <span className="mb-5 text-4xl font-bold text-purple-700">Events App</span>

      <span className="mb-5 text-xl font-semibold text-purple-600">
        - Kullanıcı Giriş -
      </span>

      <div className="px-5 py-5 sm:px-24 sm:py-12 border border-purple-500 rounded-lg w-full sm:w-[500px] bg-gray-300">
        <div className="flex flex-col">
          <div className="flex items-center text-lg font-bold mb-1">
            <MdOutlineAccountCircle size={21} />
            <label htmlFor="username" className="ml-1">
              Username:
            </label>
          </div>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-700 rounded-lg mb-10 px-3 py-1"
            placeholder="Kullanıcı adınızı giriniz.."
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center text-lg font-bold mb-1">
            <RiLockPasswordLine size={21} />
            <label htmlFor="password" className="ml-1">
              Password:{" "}
            </label>
          </div>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-700 rounded-lg mb-3 px-3 py-1"
            placeholder="Şifrenizi giriniz.."
          />
        </div>
        <div className="flex justify-end mt-3">
          <button
            onClick={handleLogin}
            className="bg-purple-400 text-white border border-purple-700 hover:text-purple-700 hover:bg-white py-2 px-3 rounded-lg"
          >
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

/*
const config = {
        headers: { Authorization: Bearer ${token} }
    };

    const bodyParameters = {
        "eventType": "TDGOPJKOPSDGKOPSDG"
    };

    axios.post( 
      "https://localhost:7134/api/EventTypes/Add",
      bodyParameters,
      config
    ).then(console.log).catch(console.log);
*/
