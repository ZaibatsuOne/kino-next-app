import { FC, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";

import { cn } from "@/shared/lib/utils";

interface Props extends LinkProps {
  className?: string;
}

export const NavLink: FC<PropsWithChildren<Props>> = (props) => {
  const { href, className, children, ...otherProps } = props;

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
