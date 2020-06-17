import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import "./sign-in-register.style.scss";

import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndRegisterPage = () => (
  <div className="sign-in-and-register">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndRegisterPage;
