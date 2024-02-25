import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQuery from "./store";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQuery((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    // When you include gameQuery in the queryKey like ["games", gameQuery],
    // you are making the query key more specific. This means that each different
    // set of gameQuery parameters will be treated as a distinct query. When you
    // change the parameters, React Query sees it as a different query and
    // automatically refetches the data.
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("1d"),
  });
};

export default useGames;
