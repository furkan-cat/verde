import React, { Key } from "react";
import { Path, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import Card from "@components/card/card";
import { IPostResponse } from "@features/api/api";

interface ICardStateProps {
  id: number | undefined;
  title: string | undefined;
  description: string | undefined;
  index: number | undefined;
}

interface Location extends Path {
  state: ICardStateProps;
  key: Key;
}

const Detail = () => {
  const data = useLocation().state as ICardStateProps;
  // const { index } = location.state;
  const state: IPostResponse[] = useSelector(
    (state: RootState) => state.postsReducer.posts
  );

  let selectedPostData;
  const typeGuard = () => {
    if (typeof data.index === "number") {
      selectedPostData = state[data?.index];
    }
  };

  return (
    <>
      <h1>selam</h1>
      <Card
        title={selectedPostData.title}
        description={selectedPostData.description}
      />
    </>
  );
};

export default Detail;
