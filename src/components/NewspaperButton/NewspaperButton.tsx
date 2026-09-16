"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type NewspaperButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function NewspaperButton({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: NewspaperButtonProps) {
  const variantClass =
    variant === "primary"
      ? "newspaper-button newspaper-button-primary"
      : "newspaper-button newspaper-button-secondary";

  return (
    <button type={type} className={`${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
