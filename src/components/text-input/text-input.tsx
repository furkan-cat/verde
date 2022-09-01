import clsx from "clsx";

type TextAreaProps = JSX.IntrinsicElements["textarea"];

interface ITextInput extends TextAreaProps {
  readOnlyText?: string | undefined;
  readOnly?: boolean;
  value?: string;
}

const TextInput = ({
  readOnlyText,
  readOnly = false,
  className,
  onChange,
  value,
}: ITextInput) => {
  return (
    <form>
      <textarea
        className={clsx("p-2 font-normal", className)}
        cols={60}
        rows={6}
        readOnly={readOnly}
        value={value ? value : readOnlyText}
        onChange={onChange}
      />
    </form>
  );
};

export default TextInput;
