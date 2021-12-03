import React, { useState, useEffect } from "react";
export default function useEcomAPI() {
  const [token, setToken] = useState([]);

  const getToken = async () => {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    });
    const token = await response.json();

    // useEffect(() => {
    //   getToken();
    // }, []);

    return token;
  };
}
