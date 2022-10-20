import { useState, useSyncExternalStore } from 'react'
import './App.css'
import About from './components/About'
import AddedItems from './components/AddedItems'
import Header from './components/Header'
import ItemsForm from './components/ItemsForm'
import NavBar from './components/NavBar'
import Result from './components/Result'
import SacW from './components/SacW'
import Steps from './components/Steps'
import {calc_max} from './utils/Algorithme'
function App() {
  const [items , setItems] = useState<{ weight: number; value: number; id: number }[]>([])
  const SacWieght: number = 6;
  const [MaxW , setWeight] = useState<number>(0) ; 
  const [AlgoLanched , setLaunched] = useState<boolean>(false)
  return (
    <div className="App ">
       <NavBar/>
       <Header/>
       <About/>
       <Steps/>
       <div className="flex justify-around px-32 py-10">
       <ItemsForm items={items} setItems={setItems} MaxW={MaxW} setWeight={setWeight} AlgoLanched={AlgoLanched}  setLaunched={setLaunched}/>
       <AddedItems items={items} setItems={setItems}/>
       <SacW MaxW={MaxW} setWeight={setWeight}/>
       </div>
       {AlgoLanched && <Result items={items} Mweight={MaxW}/>}
    </div>
  )
}

export default App
