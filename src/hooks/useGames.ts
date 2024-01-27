import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchRespose } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchRespose<Game>, Error>({
    queryKey: ["games", gameQuery],
    // When you include gameQuery in the queryKey like ["games", gameQuery],
    // you are making the query key more specific. This means that each different
    // set of gameQuery parameters will be treated as a distinct query. When you
    // change the parameters, React Query sees it as a different query and
    // automatically refetches the data.
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
