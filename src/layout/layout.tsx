import Navigation from "@components/navigation/navigation";
import React, { PropsWithChildren } from "react";
import { Outlet, OutletProps } from "react-router-dom";

const Layout: React.FC<OutletProps> = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
