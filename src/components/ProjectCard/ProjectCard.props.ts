import type { Project } from "../../types/projects.types";

export interface ProjectCardProps {
    project: Project;

    onView: () => void;

    onDetails: () => void;
}