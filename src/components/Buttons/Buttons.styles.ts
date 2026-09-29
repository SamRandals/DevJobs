import type { ButtonVariant } from "./Buttons.types";

const baseStyles =
  "px-5 py-2 rounded-lg font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

export const buttonVariants: Record<ButtonVariant, string> = {

  primary:
    "bg-blue-600 hover:bg-blue-700 text-white",

  secondary:
    "bg-gray-600 hover:bg-gray-700 text-white",

  success:
    "bg-green-600 hover:bg-green-700 text-white",

  danger:
    "bg-red-600 hover:bg-red-700 text-white",

  outline:
    "border border-gray-400 hover:bg-gray-100 text-black",
    darkner:
    "border border-white bg-black text-white hover:text-black hover:bg-white",
    lightner:
    "border border-black bg-white text-black hover:text-white  hover:bg-black",
    ocean:"border-none text-gray-300 hover:text-blue-700 "
};

export default baseStyles;