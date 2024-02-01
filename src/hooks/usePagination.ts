import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { GameQuery } from "../App";

export interface Page {
  next: string;
  previous: string;
  results: object[];
}

const apiClient = new APIClient<Page>("/games");

const usePagination = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Page>, Error>({
    queryKey: ["pages"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    keepPreviousData: true,
  });

export default usePagination;
