import { FC, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export interface TitleProps extends PropsWithChildren {
  className?: string;
}
export const Title: FC<TitleProps> = ({ children, className }) => {
  return <h4 className={cn("text-xl font-bold", className)}>{children}</h4>;
};
