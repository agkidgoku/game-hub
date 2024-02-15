import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  return (
    <Heading marginBottom={2} fontSize="4xl" as="h1">
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
