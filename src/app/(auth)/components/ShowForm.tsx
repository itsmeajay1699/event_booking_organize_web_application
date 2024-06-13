"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const ShowForm = () => {
  const [islogin, setIsLogin] = useState<boolean>(false);

  return (
    <>
      {islogin ? (
        <LoginForm setIsLogin={setIsLogin} />
      ) : (
        <RegisterForm setIsLogin={setIsLogin} />
      )}
    </>
  );
};

export default ShowForm;
