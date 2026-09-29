import type { ProjectCardProps } from "./ProjectCard.props";
import Button from "../Buttons/Buttons";

export default function ProjectCard({

    project,
  onDetails, onView

}: ProjectCardProps) {

    return (

        <article
            className="
                rounded-lg
                border
                border-gray-700
                bg-zinc-900
                overflow-hidden
                transition
                hover:scale-[1.02]
            "
        >

            {/* Imagen */}
            <div
                className="
                    relative
                    group
                    flex
                    items-center
                    justify-center
                    w-full
                    h-60
                    overflow-hidden
                "
            >

                <img

                    src={project.image}

                    alt={project.title}

                    className="
                        w-full
                        h-full
                        object-cover
                        object-top
                        transition-transform
                        duration-300
                        
                    "

                />

                {/* Overlay */}
                <div
                    className="
                        absolute
                        inset-0

                        flex
                        items-center
                        justify-center
                        gap-4

                        bg-black/60

                        opacity-0
                        translate-y-full

                        group-hover:opacity-100
                        group-hover:translate-y-0

                        transition-all
                        duration-300
                    "
                >

                    <Button
                    variant="darkner"
                        
                        onClick={(e) => {
                            e.stopPropagation();
                            onView()
                        }}
                    >
                        Ver
                    </Button>

                    <Button
                    variant="lightner"
                       
                        onClick={(e) => {
                            e.stopPropagation();
                           onDetails()
                        }}
                    >
                        Detalles
                    </Button>

                </div>

            </div>

            {/* Información */}

            <div className="p-4">

                <h2 className="text-xl font-bold text-white">

                    {project.title}

                </h2>

                <p className="mt-2 text-gray-300">

                    {project.description}

                </p>

            </div>

            <div className="m-2 flex flex-wrap gap-2">

                {project.technologies.map((tech) => (

                    <span
                        key={tech}
                        className="
                            rounded-md
                            bg-zinc-800
                            px-2
                            py-1
                            text-xs
                            text-white
                        "
                    >

                        {tech}

                    </span>

                ))}

            </div>

        </article>

    );

}