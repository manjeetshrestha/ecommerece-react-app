import React from "react";

export default function LoginError(error) {
  let itemcontent = " ";
  console.log(error.error);
  if (error.error === true) {
    itemcontent = "Invalid Username and Password";
  }
  return <h1 className="error-msg">{itemcontent}</h1>;
}
