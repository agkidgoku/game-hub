import React from "react";
import useGenres from "../hooks/useGenres";

type Props = {};

const GenreList = (props: Props) => {
  const { genres, error, isLoading } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
