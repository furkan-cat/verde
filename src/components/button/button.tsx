import { PropsWithChildren } from "react";
import clsx from "clsx";
import { renderComponet } from "src/helpers";

interface IButton extends PropsWithChildren {
  type?: "button" | "submit" | "reset";
  className?: any;
  processing?: boolean;
  onClick?: any;
  icon?: JSX.Element;
  accesoryLeft?: React.ReactNode;
  accesoryRight?: React.ReactNode | React.ReactNode[];
}

const Button = ({
  type = "submit",
  className,
  processing,
  children,
  onClick,
  accesoryLeft,
  accesoryRight,
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
      {/* {accesoryLeft && <div>{renderComponet(accesoryLeft)}</div>} */}
      {children}
      {/* {accesoryRight && renderComponet(accesoryRight)} */}
    </button>
  );
};

export default Button;
