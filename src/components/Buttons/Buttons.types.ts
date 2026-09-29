import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "outline"
  |  "darkner"
  |  "lightner"
  | "ocean"

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: ButtonVariant;

  fullWidth?: boolean;

  loading?: boolean;
}