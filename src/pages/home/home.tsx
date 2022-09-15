import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@components/card/card';
import Spinner from '@components/spinner/spinner';
import { RootState } from '@store/store';
import { IPostResponse, useGetPostsQuery } from '@features/api/api';
import { useAppDispatch, useAppSelector } from '@features/hooks/hooks';
import { fillApiPosts } from '@features/slices/api-post-slice';
import { routes } from '@constants/routes';

const Home: React.FC = (): JSX.Element => {
  const { data, isLoading } = useGetPostsQuery();
  const state: Record<number, IPostResponse> = useAppSelector(
    (state: RootState) => state.apiPostsReducer.apiPosts,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    data && Object.keys(state).length < 1 && dispatch(fillApiPosts(data));
    data &&
      localStorage.getItem('posts') == null &&
      localStorage.setItem('posts', JSON.stringify(data));
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-6">
      {data?.slice(0, 10).map((post: IPostResponse, i: number) => {
        const { userId, id, title, body } = post;
        return (
          <Link
            key={id}
            to={routes.details}
            state={{
              userId,
              id,
              title,
              body,
            }}
          >
            <Card title={title} description={body} />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
