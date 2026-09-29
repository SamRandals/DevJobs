export type JobCardProps = {
    id: string
    titulo: string
    empresa: string
    ubicacion: string
    descripcion: string
    data: {
        technology: string
        modalidad: string
        nivel: string
    }


}

export type JobsData = JobCardProps[]


export function JobCard(job: JobCardProps) {
    return(<>
    
    <article key={job.id} className="grid grid-cols-[8fr_1fr] gap-5 items-center  text-white border border-b  border-gray-600 first:rounded-t-xl last:rounded-b-xl px-4 py-6 mx-5">
        <div className="w-full text-pretty " >
            <h3 className="text-md font-bold">{job.titulo}</h3>
            <small>{job.empresa} | {job.ubicacion}</small>

            <p>{job.descripcion}</p>
        </div>
        <button className=" text-center bg-blue-400 text-white rounded-xl h-10 w-25 "> Aplicar</button>
    </article>

    </>)
}