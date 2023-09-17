import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  novie: ReactNode;
  popular: ReactNode;
  rus: ReactNode;
}

export default async function Layout(props: Props) {
  const { children, novie, popular, rus } = props;
  return (
    <>
      {children}
      <section className="container flex flex-col gap-14">
        {popular}
        {novie}
        {rus}
      </section>
    </>
  );
}
