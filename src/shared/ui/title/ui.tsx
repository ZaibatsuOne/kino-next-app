import { cn } from "@/shared/lib/utils";
import { FC, PropsWithChildren } from "react";

export interface TitleProps extends PropsWithChildren {
  className?: string;
}
export const Title: FC<TitleProps> = ({ children, className, ...props }) => {
  return (
    <h4 {...props} className={cn("text-3xl font-extrabold", className)}>
      {children}
    </h4>
  );
};
