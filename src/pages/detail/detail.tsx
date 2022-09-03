import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TextInput from "@components/text-input/text-input";
import Button from "@components/button/button";
import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from "@features/api/api";
import { FaBeer } from 'react-icons/fa';

interface ICardStateProps {
  userId: number | undefined;
  id: number | undefined;
  title: string | undefined;
  body: string | undefined;
}

const Detail = () => {
  const data = useLocation().state as ICardStateProps;
  const { id, userId, body, title } = data;
  const [inputVal, setInputVal] = useState<string | undefined>("");
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();
  console.log(typeof id);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    setInputVal(data.body);
  }, [data]);

  const mutatedVal = {
    id: id,
    userId: userId,
    body: inputVal,
    title: title,
  };

  return (
    <div className="flex flex-col content-center w-6/12 m-auto space-y-2 mt-4">
      <div className="flex place-self-end">
        <Button className="bg-sky-700" onClick={() => deletePost()} accesoryLeft={<FaBeer/>}>
          Create New Post
        </Button>
      </div>
      <div className="flex flex-col space-y-2">
        <TextInput readOnlyText={data.title} readOnly={true} />
        <TextInput onChange={handleChange} value={inputVal} />
      </div>
      <div className="flex justify-between">
        <Button className="bg-red-600">Delete</Button>
        <Button className="bg-sky-700" onClick={() => updatePost(mutatedVal)}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default Detail;
