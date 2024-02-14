import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platfroms } = usePlatforms();
  const genre = genres.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = platfroms.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  return (
    <Heading marginBottom={2} fontSize="4xl" as="h1">
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
