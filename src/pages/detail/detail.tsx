import React, { Key } from "react";
import { Path, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import Card from "@components/card/card";
import { IPostResponse } from "@features/api/api";
import { useAppSelector } from "@features/hooks/hooks";

interface ICardStateProps {
  id: number | undefined;
  title: string | undefined;
  description: string | undefined;
  cardIndex: number | undefined;
}

interface Location extends Path {
  state: ICardStateProps;
  key: Key;
}

const Detail = () => {
  const data = useLocation().state as ICardStateProps;

  return (
    <>
      <h1>selam</h1>
      <Card title={data.title} description={data.description} />
    </>
  );
};

export default Detail;
