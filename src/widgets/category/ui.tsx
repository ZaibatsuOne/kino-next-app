import { cn } from "@/shared/lib/utils";
import { Title, type TitleProps } from "@/shared/ui";
import { Carousel } from "@/shared/ui/carousel/ui";
import { FC, PropsWithChildren } from "react";

import { ICategoryCarousel } from "./config";

interface Props extends PropsWithChildren {
  className?: string;
}

export const Category: FC<Props> = ({ children, className }) => {
  return (
    <section className={cn("flex flex-col gap-2", className)}>
      {children}
    </section>
  );
};

export const CategoryCarousel: FC<ICategoryCarousel> = ({
  children,
  className,
  item,
}) => {
  return <Carousel shadow={true}>{children}</Carousel>;
};

export const CategoryTitle: FC<TitleProps> = ({ children, className }) => {
  return <Title className={cn("container pb-4", className)}>{children}</Title>;
};

// export const CategoryItem: FC = () => {};
