import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading marginBottom={2} fontSize="4xl" as="h1">
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
