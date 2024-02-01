// PaginationComponent.tsx
import React from "react";
import { useQuery } from "react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";
import { Button, Flex } from "@chakra-ui/react";
import usePagination from "../hooks/usePagination";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  gameQuery: GameQuery;
  page: number;
  onSelectPage: (page: number) => void;
}

const PaginationComponent = ({ gameQuery, page = 1, onSelectPage }: Props) => {
  const { data, error, isLoading } = usePagination(gameQuery);

  const pageSelection = (page: number) => {
    onSelectPage(page);
    window.scrollTo(0, 0);
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Flex justifyContent={"center"} gap={"1%"} margin={5}>
      <Button
        onClick={() => pageSelection(page - 1)}
        isDisabled={page === 1 || isLoading}
      >
        <BsArrowLeft />
      </Button>
      {page >= 3 && (
        <Button onClick={() => pageSelection(page - 2)}>{page - 2}</Button>
      )}
      {page >= 2 && (
        <Button onClick={() => pageSelection(page - 1)}>{page - 1}</Button>
      )}
      <Button onClick={() => pageSelection(page)} isDisabled>
        {page}
      </Button>
      <Button onClick={() => pageSelection(page + 1)}>{page + 1}</Button>
      <Button onClick={() => pageSelection(page + 2)}>{page + 2}</Button>
      {page <= 2 && (
        <Button onClick={() => pageSelection(page + 3)}>{page + 3}</Button>
      )}
      {page <= 1 && (
        <Button onClick={() => pageSelection(page + 4)}>{page + 4}</Button>
      )}
      <Button
        onClick={() => pageSelection(page + 1)}
        disabled={isLoading || !data.next}
      >
        <BsArrowRight />
      </Button>
    </Flex>
  );
};

export default PaginationComponent;
