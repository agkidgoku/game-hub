import React from "react";
import useTrailers from "../hooks/useTrailers";
import { Spinner, Text } from "@chakra-ui/react";

type Props = {
  gameId: number;
};

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  if (data?.results[0]?.data[480])
    return (
      <video
        src={data?.results[0]?.data[480]}
        poster={data?.results[0]?.preview}
        controls
        style={{ width: "100%", height: "auto" }}
      ></video>
    );
};

export default GameTrailer;
