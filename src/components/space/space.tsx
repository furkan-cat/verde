import { PropsWithChildren } from "react";

const Space = ({ children }: PropsWithChildren) => {
  return <div className="m-2">{children}</div>;
};

export default Space;
