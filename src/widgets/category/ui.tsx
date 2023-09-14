import { cn } from "@/shared/lib/utils";
import { Title, type TitleProps } from "@/shared/ui";
import { FC, PropsWithChildren } from "react";
import { ICategoryCarousel } from "./config";
import { MovieShortCard } from "@/entities/movie";

interface Props extends PropsWithChildren {
  className?: string;
}

export const Category: FC<Props> = ({ children, className }) => {
  return (
    <section>
      <div className={cn("flex flex-col gap-4", className)}>{children}</div>
    </section>
  );
};

export const CategoryCarousel: FC<ICategoryCarousel> = ({ item, children }) => {
  if (item) return <span>Loading...</span>;
  return <section className="flex items-center gap-5">{children}</section>;
};

export const CategoryTitle: FC<TitleProps> = ({ children, className }) => {
  return <Title className={className}>{children}</Title>;
};
