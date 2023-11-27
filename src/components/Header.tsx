import React from "react";
import panier from "../assets/panier.png";
const Header = () => {
  return (
    <div className="h-screen  w-full bg-stone-300 px-32">
      <div className="flex ">
        <div className=" py-40 w-1/2 ">
          <p className="text-7xl font-bold uppercase">
            {" "}
            Le problème du sac à dos
          </p>

          <p className="py-3 text-xl">
            Say goodbye to the backpack hassle! Our clever backpack solution is
            here to make your load lighter and your day brighter at the click of
            a button!
          </p>
          <a href="#solution_section">
            <button className="text-xl font-normal block bg-stone-500 px-7 py-3 rounded-md text-white hover:bg-stone-700 mt-5">
              GET STARTED
            </button>
          </a>
        </div>
        <div className="w-1/2">
          <img
            src={panier}
            className="w-2/3 block ml-auto mt-32 animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
