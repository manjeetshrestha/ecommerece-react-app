import React, { useState } from "react";

async function getToken(username, password) {
  return fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  }).then((res) => res.json());
}

export default function LoginForm({ setToken, error, setError }) {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit has been called");
    // response = getToken(username, password);
    const response = await getToken(username, password);
    if (response.token) {
      // console.log(response.token);
      localStorage.setItem("token", JSON.stringify(response));
      setToken(response.token);
      setError(false);
    }
    if (response.msg) {
      console.log(response.msg);
      setError(true);
    }
  };

  return (
    <>
      <form className="input-form" onSubmit={handleSubmit} autoComplete="off">
        {/* <label>Username</label> */}
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={handleUsernameChange}
          name="uname"
          value={username}
        ></input>
        {/* <label>Password</label> */}
        <input
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          name="psw"
          value={password}
        ></input>
        <button>Login</button>
      </form>
    </>
  );
}
