import React from "react";

const NavBar = () => {
  return (
    <div
      className="bg-stone-300 px-32 py-5 flex justify-between text-xl "
      id="header"
    >
      <div className="flex gap-2 font-bold">
        <img src="/panier.png" className="w-7 h-7 mt-1"></img>
        TP-SAC
      </div>
      <div className="w-fit  flex gap-8">
        <a href="#header">
          {" "}
          <div className="p-2">Home</div>
        </a>
        <a href="#description">
          {" "}
          <div className="p-2">Description</div>
        </a>
        <a href="#solution_section">
          {" "}
          <div className="p-2">Simulations</div>
        </a>

        <a href="#solution_section">
          <button className="text-xl font-normal block bg-stone-500 px-7 py-3 rounded-md text-white hover:bg-stone-700 ">
            GET STARTED
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
