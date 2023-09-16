import { cn } from "@/shared/lib/utils";
import Link, { LinkProps } from "next/link";
import { FC, PropsWithChildren } from "react";

interface Props extends LinkProps {
  className?: string;
}

export const NavLink: FC<PropsWithChildren<Props>> = (props) => {
  const { children, className, href, ...otherProps } = props;

  return (
    <Link
      href={href}
      {...otherProps}
      className={cn(
        "flex items-center justify-center gap-2 font-medium",
        className
      )}
    >
      {children}
    </Link>
  );
};
