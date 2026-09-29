import {type Variants } from "framer-motion";

export const motionVariants: Record<string, Variants> = {

    fade:{

        hidden:{
            opacity:0
        },

        visible:{
            opacity:1
        }

    },

    "slide-up":{

        hidden:{
            opacity:0,
            y:60
        },

        visible:{
            opacity:1,
            y:0
        }

    },
     "slide-down":{

        hidden:{
            opacity:0,
            y:-40
        },

        visible:{
            opacity:1,
            y:0
        }

    },

    "slide-left":{

        hidden:{
            opacity:0,
            x:-60
        },

        visible:{
            opacity:1,
            x:0
        }

    },
    
    "slide-right":{

        hidden:{
            opacity:0,
            x:60
        },

        visible:{
            opacity:1,
            x:0
        }

    },

    zoom:{

        hidden:{
            opacity:0,
            scale:.8
        },

        visible:{
            opacity:1,
            scale:1
        }

    },

    flip:{

        hidden:{
            opacity:0,
            rotateY:-90
        },

        visible:{
            opacity:1,
            rotateY:0
        }

    },

    rotate:{

        hidden:{
            opacity:0,
            rotate:-20
        },

        visible:{
            opacity:1,
            rotate:0
        }

    },

    blur:{

        hidden:{
            opacity:0,
            filter:"blur(12px)"
        },

        visible:{
            opacity:1,
            filter:"blur(0px)"
        }

    }

}