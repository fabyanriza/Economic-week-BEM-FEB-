import React from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div className="bg-custom-gradient  h-20 flex justify-center">
      <div className="flex justify-center items-center w-1/2 h-auto gap-20">
        <h2 className="text-2xl p-6 hidden md:block tracking-widest text-white hover:text-yellow-500 font-bold">
          HOME
        </h2>
        <h2 className="text-2xl p-6 hidden md:block tracking-widest text-white hover:text-yellow-500 font-bold">
          EVENTS
        </h2>
        <img
          src={Logo}
          alt=""
          className="flex justify-center items-center h-[60px] md:h-[65px] hover:h-[70px]"
        />
        <h2 className="text-2xl p-6 hidden md:block tracking-widest text-white hover:text-yellow-500 font-bold">
          ABOUT
        </h2>
        <h2 className="text-2xl p-6 hidden md:block tracking-widest text-white hover:text-yellow-500 font-bold">
          CONTACT
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
