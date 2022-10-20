import React from "react";

import pnaier from "../assets/panier.png";
interface AppProps {
  setWeight: React.Dispatch<React.SetStateAction<number>>;
  MaxW: number;
}
function SacW({ setWeight, MaxW }: AppProps) {
  return (
    <div className="w-1/4" >
        <div className="mb-5 uppercase text-xl">
          poids du sac a dos
        </div>
      <div className="p-10 relative">
        <img src={pnaier} />
        <div className="absolute top-36 font-bold text-stone-700 text-4xl left-24">
          {MaxW}kg
        </div>
      </div>
    </div >
  );
}

export default SacW;
