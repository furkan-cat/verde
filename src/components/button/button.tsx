import { PropsWithChildren, ReactNode, ReactElement } from "react";
import clsx from "clsx";
import { renderComponent } from "src/helpers";
import { IconBaseProps } from "react-icons/lib";

interface IButton extends PropsWithChildren {
  type?: "button" | "submit" | "reset";
  className?: any;
  processing?: boolean;
  onClick?: any;
  accesoryLeft?: (() => JSX.Element) | ReactNode;
  accesoryRight?: (() => JSX.Element) | ReactNode;
  options?: IconBaseProps | any;
}

const Button = ({
  type = "submit",
  className,
  processing,
  children,
  onClick,
  accesoryLeft,
  accesoryRight,
  options,
}: IButton) => {
  return (
    <button
      disabled={processing}
      type={type}
      className={clsx(
        "inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150",
        { "opacity-25": processing },
        className
      )}
      onClick={onClick}
    >
      {accesoryLeft && (
        <span>{renderComponent(accesoryLeft, options && options)}</span>
      )}
      {children}
      {accesoryRight && (
        <span>{renderComponent(accesoryRight, options && options)}</span>
      )}
    </button>
  );
};

export default Button;
