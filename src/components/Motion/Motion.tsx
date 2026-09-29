import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import type { MotionProps } from "./Motion.types";
import { motionVariants } from "./Motion.animations";

export default function Motion({
    children,
    animation = "fade",
    once = false,
    delay = 0,
    duration = 0.6,
    threshold = 0.2,
    className,
    transition,
    customVariant,
}: MotionProps) {

    const ref = useRef<HTMLDivElement>(null);

    const isInView = useInView(ref, {
        once,
        amount: threshold,
    });

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={customVariant ?? motionVariants[animation]}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={
                transition ?? {
                    duration,
                    delay,
                    ease: "easeOut",
                }
            }
        >
            {children}
        </motion.div>
    );
}