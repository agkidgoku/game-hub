import { Heading } from "@chakra-ui/react";
import React from "react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQuery from "../hooks/store";

const GameHeading = () => {
  const genreId = useGameQuery((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQuery((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  return (
    <Heading marginBottom={2} fontSize="4xl" as="h1">
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
