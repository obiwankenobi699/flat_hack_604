import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "dark" | "light";
  className?: string;
  target?: "_blank";
  rel?: string;
};

export function ButtonLink({ children, href, variant = "dark", className = "", target, rel }: ButtonLinkProps) {
  return <a className={`button button-${variant} ${className}`.trim()} href={href} target={target} rel={rel}>{children}</a>;
}
