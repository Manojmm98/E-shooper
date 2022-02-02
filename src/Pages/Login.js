import React from "react";
import { Link } from "react-router-dom";
import LoginFooter from "./SubContainer/LoginContainer/LoginFooter";
import LoginHeader from "./SubContainer/LoginContainer/LoginHeader";
import LoginSection from "./SubContainer/LoginContainer/LoginSection";

function Login() {
  return (
    <div>
      <LoginHeader />
      <LoginSection />
      <LoginFooter />
    </div>
  );
}

export default Login;
