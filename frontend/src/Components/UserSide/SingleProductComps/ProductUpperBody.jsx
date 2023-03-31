import { Divider, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import ImageComp from "./ImageComp";
import AddToCart from "./AddToCart";

const ProductUpperBody = ({ data }) => {
  const bg = "#61171d";

  return (
    <>
      <Stack
        m={"auto"}
        w={{ base: "98%", md: "90%", lg: "75%" }}
        p={{ base: "10px", md: 0 }}
      >
        <Flex gap="30px" mb={"30px"} direction={{ base: "column", md: "row" }}>
          <ImageComp bg={bg} data={data} />
          <AddToCart bg={bg} data={data} />
        </Flex>
        <Divider m={"auto"} w={"93%"} />
      </Stack>
    </>
  );
};

export default ProductUpperBody;
