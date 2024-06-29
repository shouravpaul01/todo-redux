import { ReactNode } from "react";
type TContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: TContainerProps) => {
  return <div className=" h-screen w-full max-w-5xl mx-auto ">{children}</div>;
};
