

export default function SearchJob(){

    return (
    
    <main>
        <section className="text-white text-center mt-10">
                <h2 className="text-3xl font-bold">Encuentra tu próximo trabajo</h2>
            <small>explora miles de  oportunidades en el sector tecnológico.</small>


            {/* barra de busqueda */}
            <div className="flex mx-auto justify-center my-5">
              <form 
            
            className="w-[80dvw] bg-[#161b22]/90 backdrop-blur-md border border-gray-700/80 rounded-md  flex items-center shadow-2xl"
          >
            <div className="flex items-center pl-4 pr-2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            
            <input 
              type="text" 
              
              
              placeholder="Buscar empleos por título, habilidad o empresa" 
              className="w-full bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none text-sm md:text-base"
            />

          </form>
            </div>
            
        </section>
    </main>



 )
}