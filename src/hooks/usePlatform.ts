import React from "react";
import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platfroms } = usePlatforms();
  return platfroms.results.find((platform) => platform.id === id);
};

export default usePlatform;
