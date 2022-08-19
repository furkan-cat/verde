import React, { useEffect } from "react";
import { IPostResponse, useGetPostsQuery } from "@features/api/api";
import Card from "@components/card/card";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { fillPosts, IPosts } from "@features/slices/post-slice";
import { useAppDispatch } from "@features/hooks/hooks";

const Home: React.FC = (): JSX.Element => {
  const { data, isError, isLoading, isFetching } = useGetPostsQuery();
  const state = useSelector((state: RootState) => state.postsReducer.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    data && dispatch(fillPosts(data));
  }, []);
  console.log(state);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-6">
      {!isLoading &&
        data
          ?.slice(0, 10)
          .map((post: IPostResponse, index) => (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.body}
              index={index}
            />
          ))}
    </div>
  );
};

export default Home;
