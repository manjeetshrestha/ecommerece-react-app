import React, { useState } from "react";
import useEcomAPI from "./useEcomApi";

export default function LoginForm() {
  const data = useEcomAPI();
  console.log(data);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your username"
        onChange={handleUsernameChange}
      ></input>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={handlePasswordChange}
      ></input>
      <button>Login</button>
    </form>
  );
}
