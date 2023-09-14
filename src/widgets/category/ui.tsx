import { Title, type TitleProps } from "@/shared/ui";
import { FC, PropsWithChildren } from "react";
import { ICategoryCarousel } from "./config";
import { Carousel } from "@/shared/ui/carousel/ui";
import { cn } from "@/shared/lib/utils";

interface Props extends PropsWithChildren {
  className?: string;
}

export const Category: FC<Props> = ({ children, className }) => {
  return <section className={cn("", className)}>{children}</section>;
};

export const CategoryCarousel: FC<ICategoryCarousel> = ({
  item,
  children,
  className,
}) => {
  return <Carousel className={className}>{children}</Carousel>;
};

export const CategoryTitle: FC<TitleProps> = ({ children, className }) => {
  return <Title className={cn("mb-6", className)}>{children}</Title>;
};

// export const CategoryItem: FC = () => {};
