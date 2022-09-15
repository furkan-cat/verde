import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FaBeer } from 'react-icons/fa';
import Button from '@components/button/button';
import TextInput from '@components/text-input/text-input';
import {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetPostsQuery,
  useUpdatePostMutation,
} from '@features/api/api';
import { routes } from '@constants/routes';

interface ICardStateProps {
  userId: number | undefined;
  id: number | undefined;
  title: string | undefined;
  body: string | undefined;
}

interface IInput {
  title: string | undefined;
  body: string | undefined;
}

const Detail = () => {
  const navigate = useNavigate();
  const data = useLocation().state as ICardStateProps;
  const { id, userId, body, title } = data;
  const [input, setInput] = useState<IInput>({ title: '', body: '' });
  const [updatePost] = useUpdatePostMutation();
  const [createPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const { refetch } = useGetPostsQuery();

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput((prev) => ({ ...prev, body: e.target.value }));
  };

  const handleCreate = () => {
    const createdData = {
      id: Number(uuidv4()),
      userId: userId,
      title: input?.title,
      body: input?.body,
    };

    createPost(createdData);
    refetch();
    navigate(routes.home);
  };

  const handleDelete = () => {
    deletePost(id);
    refetch();
    navigate(routes.home);
  };

  useEffect(() => {
    setInput({ title: data.title, body: data.body });
  }, [data]);

  const mutatedVal = {
    id: id,
    userId: userId,
    body: input?.body,
    title: input?.title,
  };

  return (
    <div className="flex flex-col content-center w-6/12 m-auto space-y-2 mt-4">
      <div className="flex place-self-end">
        <Button
          className="bg-sky-700"
          onClick={handleCreate}
          accesoryLeft={<FaBeer className="mr-2" />}
        >
          Create New Post
        </Button>
      </div>
      <div className="flex flex-col space-y-2">
        <TextInput onChange={handleTitleChange} value={input?.title} />
        <TextInput onChange={handleBodyChange} value={input?.body} />
      </div>
      <div className="flex justify-between">
        <Button className="bg-red-600" onClick={handleDelete}>
          Delete
        </Button>
        <Button className="bg-sky-700" onClick={() => updatePost(mutatedVal)}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default Detail;
