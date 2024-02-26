import { Box, Heading, List } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = {
  term: string;
  children: ReactNode;
};

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading size={"sm"} paddingBottom={1} color={"gray.600"}>
        {term}
      </Heading>
      <List>{children}</List>
    </Box>
  );
};

export default DefinitionItem;
