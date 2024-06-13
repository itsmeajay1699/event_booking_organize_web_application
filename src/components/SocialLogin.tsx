import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faGoogle,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const SocialLogin = () => {
  return (
    <div>
      <div className="mt-10 grid gap-3">
        {/* Google */}

        <button className="w-full text-black py-3 rounded-md font-bold border-2 border-gray-300 flex items-center justify-center gap-2">
          <Image
            src="/google.svg"
            alt="Google"
            width={21}
            height={21}
            className="rounded-full"
          />
          Sign in with Google
        </button>

        <button className="w-full text-black py-3 rounded-md font-bold border-2 border-gray-300 flex items-center justify-center gap-2">
          <FontAwesomeIcon
            className="text-white bg-blue-500 rounded-full w-6"
            icon={faFacebook}
          />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
