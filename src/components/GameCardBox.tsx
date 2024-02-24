import { Box, transition } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardBox = ({ children }: Props) => {
  return (
    <Box
      borderRadius="10px"
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform ease-in .15s",
      }}
      transition="ease-out .15s"
    >
      {children}
    </Box>
  );
};

export default GameCardBox;
