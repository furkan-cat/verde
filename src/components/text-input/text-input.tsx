interface ITextInput {
  text: string | undefined;
}

const TextInput = ({ text }: ITextInput) => {
  return (
    <textarea className="p-2 resize-none" cols={35} rows={6}>
      {text}
    </textarea>
  );
};

export default TextInput;
