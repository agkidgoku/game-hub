import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import getCroppedImage from "../services/image-url";
import useGameQuery from "../hooks/store";
import genres from "../data/genres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQuery((s) => s.gameQuery.genreId);
  const setSelectedGenre = useGameQuery((s) => s.setGenre);

  if (error) return null;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        <ListItem key={selectedGenreId} paddingY="5px">
          <HStack>
            <Image
              objectFit={"cover"}
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImage(data.results[8].image_background)}
            />
            <Button
              whiteSpace={"normal"}
              textAlign={"left"}
              fontWeight={!selectedGenreId ? "bold" : ""}
              variant="link"
              fontSize="lg"
              onClick={() => setSelectedGenre()}
              color="gray-900"
            >
              All Games
            </Button>
          </HStack>
        </ListItem>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenreId ? "bold" : ""}
                variant="link"
                fontSize="lg"
                onClick={() => setSelectedGenre(genre.id)}
                color="gray-900"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
