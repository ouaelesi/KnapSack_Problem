import React, { useEffect, useState } from "react";
import sac from "../assets/item.png";

interface appProps {
  items: { weight: number; value: number; id: number }[];
  setItems: React.Dispatch<
    React.SetStateAction<
      {
        weight: number;
        value: number;
        id: number;
      }[]
    >
  >;
}

function AddedItems({ items, setItems }: appProps) {
  useEffect(() => {}, [items]);
  const [r ,setr] = useState(true) ; 
  return (
    <div className="w-1/3 ">
      <div className="uppercase text-xl">Added Items</div>
      <div className="flex flex-wrap  gap-5 py-5 ">
        {items.map(
          (
            item: { weight: number; value: number; id: number },
            key: number
          ) => (
            <div
              className="w-24 bg-stone-50 border border-stone-200  rounded-md p-2 relative"
              key={key}
            >
              {/* <button
                className="block ml-auto text-xs"
                onClick={() => {
                  items.splice(key, 1);
                  setItems(items);
                  setr(!r); 
                }}
              >
                X
              </button> */}
              <img src={sac} className="w-full " />
              {/* <div className="text-xs text-center">Item: {item.id}</div> */}
              <div className="text-xs text-center absolute top-2 left-6 px-1  text-white rounded-full bg-gray-900   font-semibold">item: {item.id}</div>
              <div className="text-sm text-center absolute top-9 right-3  -rotate-12 font-bold">{item.weight}KG</div>
              <div className="text-sm text-center absolute top-9 left-5  rotate-12  font-bold">{item.value}£</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default AddedItems;
