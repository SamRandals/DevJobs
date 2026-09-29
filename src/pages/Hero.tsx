import { useState, type SubmitEvent } from 'react';

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: SubmitEvent) => {
    e.preventDefault();
    console.log("Buscando puesto o habilidad:", searchTerm);
  };

  const features = [
    {
      title: "Encuentra el trabajo de tus sueños",
      description: "Busca miles de empleos de las mejores empresas de todo el mundo.",
      icon: (
        <svg className="w-6 h-6 text-[#1173D4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      title: "Conecta con las mejores empresas",
      description: "Conecta con empresas que están contratando por tus habilidades.",
      icon: (
        <svg className="w-6 h-6 text-[#1173D4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
    },
    {
      title: "Obtén el salario que mereces",
      description: "Obtén el salario que mereces con nuestra calculadora de salarios.",
      icon: (
        <svg className="w-6 h-6 text-[#1173D4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-dev text-white w-full overflow-x-hidden">
      
      {/* 1. Sección Principal del Banner (Hero Superior) */}
      <section className="relative w-full  h-dvh bg-[url('./images/programadores.avif')] bg-cover bg-center bg-no-repeat flex items-center justify-center isolate">
        
        {/* Capa oscura de contraste */}
        <div className="absolute inset-0 bg-dev/80 z-0"></div>

        {/* Contenido del Banner */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Encuentra el trabajo de tus sueños
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Únete a la comunidad más grande de desarrolladores y encuentra tu próxima oportunidad.
          </p>

          {/* Barra de Búsqueda */}
          <form 
            onSubmit={handleSearch}
            className="w-full max-w-2xl bg-[#161b22]/90 backdrop-blur-md border border-gray-700/80 rounded-full p-2 flex items-center shadow-2xl"
          >
            <div className="flex items-center pl-4 pr-2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar empleos por título, habilidad o empresa" 
              className="w-full bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none text-sm md:text-base"
            />

            <button 
              type="submit"
              className="bg-[#1173D4] hover:bg-[#0e5fa8] text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 text-sm md:text-base shrink-0 cursor-pointer shadow-md"
            >
              Buscar
            </button>
          </form>

        </div>
      </section>

      {/* 2. Sección Complementaria de Tarjetas (Grid Integration) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            ¿Por qué DevJobs?
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            DevJobs es la principal bolsa de trabajo para desarrolladores. Conectamos a los desarrolladores con las mejores empresas del mundo.
          </p>
        </div>

        {/* Rejilla de Tarjetas con Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#161b22] border border-gray-800 rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:border-gray-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#1173D4]/15 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold mb-3 text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}