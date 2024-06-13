import SocialLogin from "@/components/SocialLogin";
import Image from "next/image";
import React from "react";
import LoginAndRegisterForm from "../components/LoginForm";
import ShowForm from "../components/ShowForm";

const LoginPage = () => {
  return (
    <section className="text-center max-w-[420px] m-auto">
      <div className="flex items-center justify-center gap-1.5">
        <Image src="/apple.svg" alt="Apple" width={25} height={25} />
        <span className="font-bold text-gray-800">Event Management</span>
      </div>

      {/* info about the website*/}

      <div>
        <h1
          className="text-5xl font-bold text-gray-800"
          style={{ fontFamily: "Poppins" }}
        >
          Welcome to Eventio
        </h1>
        <p
          className="text-gray-600 mt-4"
          style={{ fontFamily: "Poppins", fontSize: "0.9rem" }}
        >
          The all in one Event Management Platform for your events. The all in
          one Event Management Platform for your events. The all in one Event
          Management Platform for your events. The all in one Event Management
          Platform for your events 🎉
        </p>
      </div>

      {/* social logins */}
      <SocialLogin />

      {/* or with two side lines */}

      <div className="flex items-center gap-5 mt-5">
        <div className="w-full h-0.5 bg-gray-300"></div>
        <span className="text-gray-500">or</span>
        <div className="w-full h-0.5 bg-gray-300"></div>
      </div>

      {/* form */}

      <div>
        <ShowForm />
      </div>
    </section>
  );
};

export default LoginPage;

//
