import { ReactNode } from "react";

interface Props {
  animation: ReactNode;
  children: ReactNode;
  novie: ReactNode;
  popular: ReactNode;
  rus: ReactNode;
}

export default async function Layout(props: Props) {
  const { animation, children, novie, popular, rus } = props;
  return (
    <>
      {children}
      <section className=" flex flex-col gap-14">
        {popular}
        {rus}
        {novie}
        {animation}
      </section>
    </>
  );
}
