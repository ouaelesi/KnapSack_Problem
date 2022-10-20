import React from "react";

const NavBar = () => {
  return (
    <div className="bg-stone-300 px-32 py-5 flex justify-between text-xl">
      <div>TP-SAC</div>
      <div className="w-fit  flex gap-8">
        <div className="p-2">About</div>
        <div className="p-2">About</div>
        <div className="p-2">About</div>

        <button className="bg-stone-500 px-5 py-2 rounded-md text-white hover:bg-stone-700">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
