import { useEffect } from "react";
import { calc_max, insertedItems } from "../utils/Algorithme";

import sac from "../assets/item.png";
interface AppProps {
  items: { weight: number; value: number; id: number }[];
  Mweight: number;
}

function Result({ items, Mweight }: AppProps) {
  let MaxGain = calc_max(items, Mweight)[items.length][Mweight];
  let MaxWeight: number = 0;
  insertedItems(calc_max(items, Mweight), items).map((id, key) => {
    MaxWeight += items[id].weight;
  });
  return (
    <div className="py-10 px-32" id="solution">
      <div className="text-5xl text-center py-10 font-extrabold uppercase">
        Sollution !!
      </div>
      <div className="flex justify-around">
        <div className="bg-stone-100  px-5 py-2 rounded-md border border-stone-300 w-1/4">
          <div className="text-2xl mb-5 font-medium">Le Maximum Gain</div>
          <div className="text-6xl font-medium">
            {" "}
            {MaxGain}£
          </div>
        </div>
        <div className="bg-stone-100  px-5 py-2 rounded-md border border-stone-300 w-1/4">
          <div className="text-2xl mb-5 font-medium">Le Maximum weight</div>
          <div className="text-6xl font-medium"> {MaxWeight}KG</div>
        </div>
        <div className="bg-stone-100  px-5 py-2 rounded-md border border-stone-300 w-1/3">
          <div className="text-2xl mb-5 font-medium">Items in the bag</div>
          <div className="flex gap-2 flex-wrap ">
            {insertedItems(calc_max(items, Mweight), items).map((id, key) => (
              <div
                className="w-24 bg-stone-50 border border-stone-200  rounded-md p-2 relative"
                key={key}
              >
                <img src={sac} className="w-full " />
                <div className="text-xs text-center absolute top-2 left-6 px-1  text-white rounded-full bg-gray-900   font-semibold">item: {items[id].id}</div>
                <div className="text-sm text-center absolute top-9 right-3  -rotate-12 font-bold">{items[id].weight}KG</div>
              <div className="text-sm text-center absolute top-9 left-5  rotate-12  font-bold">{items[id].value}£</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 w-fit mx-auto">
          <div className="w-full bg-green-700 h-10 text-center text-white pt-2 ">Déroulemnet de l algorithme</div>
          {
              calc_max(items, Mweight).map((elem,key)=><div className="flex">
                  {
                      elem.map((e ,i)=><div className={`w-10 h-10 bg-stone-100 border text-center text-md pt-2 ${i===Mweight && key ===items.length ? 'bg-green-700 text-white border-2 border-gray-900' : 'bg-stone-100'}`}>{e}</div>)
                  }
              </div>)
          }
      </div>
    </div>
  );
}
export default Result;
