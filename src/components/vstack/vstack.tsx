import { PropsWithChildren } from "react";
import cn from "classnames";

interface IVstack extends PropsWithChildren {
  center?: "items-center";
}

const Vstack = ({ children, center }: IVstack) => {
  return <div className={cn(`flex flex-col ${center}`)}>{children}</div>;
};

export default Vstack;
