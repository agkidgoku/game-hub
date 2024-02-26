import React from "react";
import { Game } from "../entities/Game";
import {
  Box,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

type Props = {
  game: Game;
};

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem
        term="Platforms"
        children={game.parent_platforms.map((platform) => (
          <ListItem key={platform.platform.id}>
            {platform.platform.name}
          </ListItem>
        ))}
      />
      <DefinitionItem
        term="Metascore"
        children={<CriticScore score={game.metacritic} />}
      />
      <DefinitionItem
        term="Genres"
        children={game.genres.map((genre) => (
          <ListItem key={genre.id}>{genre.name}</ListItem>
        ))}
      />
      <DefinitionItem
        term="Publishers"
        children={game.publishers.map((publisher) => (
          <ListItem key={publisher.id}>{publisher.name}</ListItem>
        ))}
      />
    </SimpleGrid>
  );
};

export default GameAttributes;
