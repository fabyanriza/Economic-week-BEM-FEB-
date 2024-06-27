import React from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div className="bg-custom-gradient max-w-screen h-20 flex justify-center">
      <div className="flex justify-center items-center w-1/2 h-auto gap-20">
        <h2 className="text-white hover:text-yellow-400 font-bold font-custom tracking-widest">
          HOME
        </h2>
        <h2 className="text-white hover:text-yellow-400 font-bold font-custom tracking-widest">
          EVENTS
        </h2>
        <img
          src={Logo}
          alt=""
          className="flex justify-center items-center h-[60px] hover:h-[65px]"
        />
        <h2 className="text-white hover:text-yellow-400 font-bold font-custom tracking-widest">
          ABOUT
        </h2>
        <h2 className="text-white hover:text-yellow-400 font-bold font-custom tracking-widest">
          CONTACT
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
