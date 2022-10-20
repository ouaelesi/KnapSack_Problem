import React from 'react';
import panier from '../assets/panier.png'
const Header = () => {
    return (
        <div className="h-[600px]  w-full bg-stone-300 px-32">
           <div className='flex '>
               <div className="text-7xl py-40 w-1/2 font-bold uppercase">
                   Le problème du sac à dos 
                   <button className='text-xl font-normal block bg-stone-500 px-7 py-3 rounded-md text-white hover:bg-stone-700 mt-10'>Get started</button>
               </div>
               <div className="w-1/2">
                   <img src={panier} className='w-2/3 block ml-auto mt-32 animate-bounce'/>

               </div>
            
           </div>
        </div>
    );
};

export default Header;