import React, { useEffect } from "react";
import { IPostResponse, useGetPostsQuery } from "@features/api/api";
import Card from "@components/card/card";
import { RootState } from "@store/store";
import { fillPosts } from "@features/slices/post-slice";
import { useAppDispatch, useAppSelector } from "@features/hooks/hooks";
import { routes } from "@constants/routes";
import { Link } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
  const { data, isError, isLoading, isFetching } = useGetPostsQuery();
  const state: Record<number, IPostResponse> = useAppSelector(
    (state: RootState) => state.postsReducer.posts
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    data && Object.keys(state).length < 1 && dispatch(fillPosts(data));
    data && localStorage.getItem("posts") == null && localStorage.setItem("posts", JSON.stringify(data));
  }, [data]);
  console.log(state);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-6">
      {!isLoading &&
        data?.slice(0, 10).map((post: IPostResponse, i: number) => {
          const { userId, id, title, body } = post;
          return (
            <Link key={id} to={routes.details} state={{ id, title, body, i }}>
              <Card title={title} description={body} />
            </Link>
          );
        })}
    </div>
  );
};

export default Home;
