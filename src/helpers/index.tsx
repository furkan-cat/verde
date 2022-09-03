import React, { Component } from "react";

interface IRenderComponent {
  Component?: React.ReactNode | React.ReactNode[];
  option?: any;
}

export const renderComponet: React.FC<IRenderComponent> = (
  Component,
  options
) => {
  switch (typeof Component) {
    case "function":
      return <Component {...options} />;
    default:
      return Component;
  }
};
