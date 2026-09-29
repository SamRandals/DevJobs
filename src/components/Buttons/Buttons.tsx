import type { ButtonProps } from "./Buttons.types";
import baseStyles, { buttonVariants } from "./Buttons.styles";

export default function Button({

    children,

    variant = "primary",

    fullWidth = false,

    loading = false,

    className = "",

    disabled,

    ...props

}: ButtonProps) {

    return (

        <button

            className={`
                ${baseStyles}
                ${buttonVariants[variant]}
                ${fullWidth ? "w-full" : ""}
                ${className}
            `}

            disabled={disabled || loading}

            {...props}
        >

            {
                loading
                ? "Cargando..."
                : children
            }

        </button>

    );

} 