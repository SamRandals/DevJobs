import type { ReactNode } from "react";
import type { Transition, Variants } from "framer-motion";

import { motionVariants } from "./Motion.animations";

export interface MotionProps {
    children: ReactNode;

    animation?: keyof typeof motionVariants;

    once?: boolean;

    delay?: number;

    duration?: number;

    threshold?: number;

    className?: string;

    transition?: Transition;

    customVariant?: Variants;
}