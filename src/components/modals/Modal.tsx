import { type modalProps } from "./Modal.props";
import {MdClose} from "react-icons/md"
import { AnimatePresence, motion } from "framer-motion";
import { modalAnimations } from "./Modal.animations";


export default function Modal({onClose, isOpen, withTitle, title, secondClose, children, animation="scale"}:modalProps){


    

    return(<>
<AnimatePresence>
    {isOpen && (<>

    
    
{/* Modal click black */}
    <motion.div  className="
    fixed
    inset-0
    flex
    items-center
    justify-center
    bg-black/50
    backdrop-blur
    z-10
    "

    initial={{ opacity: 0 }}

    animate={{ opacity: 1 }}

    exit={{ opacity: 0 }}

    transition={{ duration: .2 }}

    onClick={onClose}>


            <motion.div     variants={modalAnimations[animation]}

    initial="hidden"

    animate="visible"

    exit="exit"

    transition={{

        type: "spring",

        stiffness: 280,

        damping: 24,

    }}


    className="
    flex
    flex-col
    w-[80dvw]
    h-[90dvh]
    bg-black
    rounded-md
    border
    border-white
    items-center
    "

    onClick={(e)=>e.stopPropagation()}>
               {withTitle === true && (<>
                 <div className="flex font-bold font-serif   sm:text-lg  md:text-2xl">
                    <h2>{title}</h2>
                </div>


               </>)}
                {secondClose === true && (<>
                    <div className="flex w-full justify-end h-5 p-2 ">
                        <MdClose className="text-white transition hover:scale-110 hover:text-red-500 duration-500 ease-in " onClick={()=>onClose()}></MdClose>
                    </div>
                </>)}

                {children}

            </motion.div>
    </motion.div>
     

    </>
    )}
</AnimatePresence>
        </>)
}
