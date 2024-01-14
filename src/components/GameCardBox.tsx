import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardBox = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardBox;
