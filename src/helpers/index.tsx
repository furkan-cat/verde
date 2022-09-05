import { ReactNode } from 'react';
import { IconBaseProps } from 'react-icons/lib';

interface IRenderComponent {
  Component: (() => JSX.Element) | ReactNode;
  options?: IconBaseProps | any;
}

export const renderComponent = (
  Component: IRenderComponent['Component'],
  options: IRenderComponent['options'] = {},
) => {
  switch (typeof Component) {
    case 'function':
      return <Component {...options} />;
    default:
      return Component;
  }
};
