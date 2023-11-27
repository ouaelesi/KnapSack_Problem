import React from "react";
import sac from "../assets/sac.png";
import exmpl from "../assets/exmpl.png";
const About = () => {
  return (
    <div className="px-32 h-[700px]" id="description">
      <div className="text-5xl text-center py-10 font-extrabold uppercase">
        Déscription du probléme
      </div>
      <div className="flex justify-between py-32 gap-8">
        <div className="w-5/12 ">
          <p className="text-md">
            En algorithmique, le problème du sac à dos, parfois noté (KP) (de
            l'anglais Knapsack Problem)1 est un problème d'optimisation
            combinatoire. Il modélise une situation analogue au remplissage d'un
            sac à dos, ne pouvant supporter plus d'un certain poids, avec tout
            ou partie d'un ensemble donné d'objets ayant chacun un poids et une
            valeur. Les objets mis dans le sac à dos doivent maximiser la valeur
            totale, sans dépasser le poids maximum.
          </p>
          <button className=" mt-5 underline">Voir Plus</button>
        </div>
        <div className="w-3/12">
          <img src={sac} />
        </div>
        <div className="w-3/12">
          <img src={exmpl} />
        </div>
      </div>
    </div>
  );
};

export default About;
