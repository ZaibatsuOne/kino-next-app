import { Title, type TitleProps } from "@/shared/ui";
import { FC, PropsWithChildren } from "react";
import { ICategoryCarousel } from "./config";
import { Carousel } from "@/shared/ui/carousel/ui";

interface Props extends PropsWithChildren {
  className?: string;
}

export const Category: FC<Props> = ({ children, className }) => {
  return <section>{children}</section>;
};

export const CategoryCarousel: FC<ICategoryCarousel> = ({
  item,
  children,
  className,
}) => {
  return <Carousel className={className}>{children}</Carousel>;
};

export const CategoryTitle: FC<TitleProps> = ({ children, className }) => {
  return <Title className={className}>{children}</Title>;
};

// export const CategoryItem: FC = () => {};
