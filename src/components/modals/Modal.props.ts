import type { ReactNode } from "react"
import type { ModalAnimation } from "./Modal.types"

export interface modalProps{
onClose: ()=> void,
isOpen:boolean,
withTitle:boolean
title?:string
secondClose?:boolean,
children:ReactNode,
animation?:ModalAnimation 
}