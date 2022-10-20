import Reac, { useState } from "react";

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
  setWeight: React.Dispatch<React.SetStateAction<number>>;
  MaxW: number;
  AlgoLanched: boolean;
  setLaunched: React.Dispatch<React.SetStateAction<boolean>>;
}
function ItemsForm({
  items,
  setItems,
  setWeight,
  MaxW,
  setLaunched,
  AlgoLanched,
}: appProps) {
  let formValues: { id: number; value: number; weight: number } = {
    id: items.length + 1,
    weight: 0,
    value: 0,
  };
  let [wValue, setWvalue] = useState<number>(0);
  const [step, setStep] = useState(0);
  function stepForm() {
    return [
      <div className="w-1/3  bg-stone-50 border border-stone-200 p-5 rounded-md">
        <div className="mb-5 uppercase text-xl">Ajouter un element</div>
        <label>Poid</label>
        <input
          type="number"
          id="inputform"
          className="block outline-none px-2 py-2  rounded-md border border-stone-200 w-full my-2"
          onChange={(e) => {
            formValues.weight = Number(e.target.value);
          }}
        />
        <label>valeur</label>
        <input
          type="number"
          id="inputform"
          className="block outline-none px-2 py-2  rounded-md border border-stone-200 w-full my-2"
          onChange={(e) => (formValues.value = Number(e.target.value))}
        />
        <button
          className="block bg-stone-500 text-white w-full py-2 rounded-md mt-5"
          onClick={() => {
            setItems([...items, formValues]);
          }}
        >
          Ajouter
        </button>
        <button
          className="block ml-auto px-3 py-2 underline"
          onClick={() => setStep(1)}
        >
          Next
        </button>
      </div>,

      <div className="w-1/3  bg-stone-50 border border-stone-200 p-5 rounded-md">
        <div className="mb-5 uppercase text-xl">
          Spécifier le poids max du Sac
        </div>
        <label>Max Weight</label>
        <input
          type="number"
          value={wValue != 0 ? wValue : ""}
          className="block outline-none px-2 py-2 rounded-md border border-stone-200 w-full my-2"
          onChange={(e) => setWvalue(Number(e.target.value))}
        />
        <button
          className="block bg-stone-500 text-white w-full py-2 rounded-md mt-5"
          onClick={() => setWeight(wValue)}
        >
          Appliquer
        </button>
        <div className="flex justify-between">
          <button
            className="block  px-3 py-2 underline"
            onClick={() => setStep(0)}
          >
            Previous
          </button>
          <button
            className="block  px-3 py-2 underline"
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </div>
      </div>,
      <div className="w-1/3  bg-stone-50 border border-stone-200 p-5 rounded-md">
        <div className="mb-5 uppercase text-xl">Lancer le Programme</div>
        <div className="px-4 py-2 my-2 rounded-md border border-stone-300">
          Le nombre totales des elements Ajoutés: <b>{items.length}</b>
        </div>
        <div className="px-4 py-2 my-2 rounded-md border border-stone-300">
          Le Poids maximum du sac a dos: <b>{MaxW}KG</b>
        </div>
        <button
          className="block bg-stone-500 text-white w-full py-2 rounded-md mt-5"
          onClick={() => setLaunched(true)}
        >
          Lancer le programme
        </button>
        <button
          className="block  px-3 py-2 underline"
          onClick={() => setStep(1)}
        >
          Previous
        </button>
      </div>,
    ];
  }

  return <>{stepForm()[step]}</>;
}

export default ItemsForm;
