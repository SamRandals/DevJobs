import Button from "../components/Buttons/Buttons"
import Motion from "../components/Motion/Motion"
import { useState, useEffect } from "react"

type OptionProp={
  whatOptionIsSelected: (a:string)=> void
}

export default function Header({whatOptionIsSelected}: OptionProp){

const [menuOpen, setMenuOpen] = useState<boolean>(false)




useEffect(() => {
  const mediaQuery = window.matchMedia('(min-width: 768px)'); //definimos max width

  const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) {
      setMenuOpen(false);
    }
  };

  // Evaluar por si acaso la página carga ya en modo md con el menú abierto
  handleResize(mediaQuery);

  // Escuchar cambios de tamaño en tiempo real
  mediaQuery.addEventListener('change', handleResize);

  return () => {
    mediaQuery.removeEventListener('change', handleResize);
  };
}, []);

return(

 <header className="flex relative items-center justify-between text-white h-20 border-b border-gray-400">
    {/* Logo divisior */}
    <div className="flex items-center justify-center gap-5 ml-12  ">
       <svg className="h-8 w-8 text-primary" fill="none" stroke="#1173D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <h2 className="text-xl font-bold">DevJobs</h2>
    </div>
    {/* nav for pc view */}
      <nav className=" hidden md:flex  w-auto  items-center justify-end-safe  "> 
            <Button variant="ocean" onClick={()=>whatOptionIsSelected("search")}>Buscar</Button>
            <Button variant="ocean">Empleo</Button>
            <Button variant="ocean">Empresas</Button>
            <Button variant="ocean">Salarios</Button>
        </nav>

        <div className="flex gap-4">
            <Button className="w-fit text-sm md:text-md" variant="primary">Publicar un Empleo</Button>
            <Button className="text-sm md:text-md bg-gray-700" >Iniciar sesion</Button>
        </div>

    <Button className="flex md:hidden mx-2" onClick={()=>setMenuOpen(!menuOpen)}>|||</Button>
    
   
    {/* nav for android view */}

    {
    menuOpen === true && (
       <Motion className="flex flex-col absolute top-full right-0 z-10 bg-dev/80" animation="slide-right" duration={1}>
          <nav className="flex flex-col w-35 ml-auto h-auto  items-center justify-evenly border-l  border-gray-400"> 
            <Button variant="ocean">Buscar</Button>
            <Button variant="ocean">Empleo</Button>
            <Button variant="ocean">Empresas</Button>
            <Button variant="ocean">Salarios</Button>
          </nav>
       </Motion>
    )
 }


 </header>


)

}