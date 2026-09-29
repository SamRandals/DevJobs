import type { Variants } from "framer-motion";
import type { ModalAnimation } from "./Modal.types";

export const modalAnimations: Record<ModalAnimation, Variants> = {

    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    },

    scale: {
        hidden: {
            opacity: 0,
            scale: .95,
        },
        visible: {
            opacity: 1,
            scale: 1,
        },
        exit: {
            opacity: 0,
            scale: .95,
        },
    },

    slideTop: {
        hidden: {
            opacity: 0,
            y: -35,
            scale: .98,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: .98,
        },
    },

    slideBottom: {
   hidden: {
            opacity: 0,
            y: 35,
            scale: .98,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: .98,
        },

    },

    slideLeft: {

        // ...

    },

    slideRight: {

        // ...

    },
    rotateScale: {

    hidden: {

        opacity: 0,

        scale: .7,

        rotate: -25,

    },

    visible: {

        opacity: 1,

        scale: 1,

        rotate: 0,

    },

    exit: {

        opacity: 0,

        scale: .7,

        rotate: 25,

    },

},
flip: {

    hidden: {

        opacity: 0,

        rotateX: -90,

    },

    visible: {

        opacity: 1,

        rotateX: 0,

    },

    exit: {

        opacity: 0,

        rotateX: 90,

    },

},
blur: {

    hidden: {

        opacity: 0,

        filter: "blur(12px)",

        scale: .95,

    },

    visible: {

        opacity: 1,

        filter: "blur(0px)",

        scale: 1,

    },

    exit: {

        opacity: 0,

        filter: "blur(12px)",

        scale: .95,

    },

},

};