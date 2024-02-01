import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardBox from "./GameCardBox";
import { GameQuery } from "../App";
import React, { useState } from "react";
import { MdNextPlan } from "react-icons/md";
import Pagination from "./Pagination";
import APIClient from "../services/api-client";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const apiClient = new APIClient("/games");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) <Text>{error.message}</Text>;
  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardBox key={skeleton}>
              <GameCardSkeleton />
            </GameCardBox>
          ))}

        <React.Fragment>
          {data?.results.map((game) => (
            <GameCardBox key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardBox>
          ))}
        </React.Fragment>
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
