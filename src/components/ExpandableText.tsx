import React, { ReactNode, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const limit = 600;
  const summary = children.substring(0, limit);

  if (!children) return null;
  if (children.length < limit) return <Text>{children}</Text>;

  return (
    <>
      <Text>{showMore ? children : `${summary}...`}</Text>
      <Box
        marginTop={2}
        display={"flex"}
        alignItems={"center"}
        gap={1}
        fontWeight="semibold"
        onClick={() => setShowMore(!showMore)}
      >
        <Text>{showMore ? `Show Less` : "Show More"}</Text>
        {showMore ? <BsChevronUp /> : <BsChevronDown />}
      </Box>
    </>
  );
};

export default ExpandableText;
