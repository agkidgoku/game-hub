import React from "react";
import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

type Props = {
  gameId: number;
};

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0].preview}
      controls
    ></video>
  );
};

export default GameTrailer;
