import React from "react";

const Steps = () => {
  return (
    <div className="px-32 py-10">
      <div className="text-5xl text-center py-10 font-extrabold uppercase">
        Commencer !!
      </div>
      <div className="flex justify-between ">
        <div className="bg-stone-100  px-5 py-2 rounded-md border border-stone-300">
          <div>step 1</div>
          <div className="text-2xl py-5 ">Ajouter des nouveaux elements </div>
        </div>
        <div className="bg-stone-100  px-5 py-2 rounded-md border border-stone-300">
          <div>step 1</div>
          <div className="text-2xl py-5 ">Ajouter des nouveaux elements </div>
        </div>
        <div className="bg-stone-100  px-5 py-2 rounded-md border border-stone-300">
          <div>step 1</div>
          <div className="text-2xl py-5 ">Ajouter des nouveaux elements </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
