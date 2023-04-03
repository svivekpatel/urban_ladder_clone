import { Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./imageComp.css";

const ImageComp = ({ data, bg }) => {
  return (
    <>
      <Stack w={{ base: "98%", sm: "98%", md: "72%" }} pos={"relative"}>
        <Text
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          fontSize={"27px"}
          color={"#B52B37"}
          textDecor={"underline"}
        >
          {" "}
          {data.title}
        </Text>
        <Stack pb={"20px"} w="75%">
          <Image maxHeight={"95%"} src={data.img} />
        </Stack>
        <Text fontSize={"14px"} color={"#b52b37"}>
          PRODUCT DETAILS
        </Text>
        <SimpleGrid w={"95%"} columns={{ base: 1, lg: 2 }}>
          <Flex gap={"5px"}>
            <Text className="product-details">● Net Quantity:</Text>
            <Text className="product-details-value">1 N</Text>
          </Flex>
          <Flex gap={"5px"}>
            <Text className="product-details">● Product Dimensions:</Text>
            <Text className="product-details-value">
              81.0 cm x 47.0 cm x 52.0 cm
            </Text>
          </Flex>
          <Flex gap={"5px"}>
            <Text className="product-details">● Country of Origin:</Text>
            <Text className="product-details-value">India</Text>
          </Flex>
          <Flex gap={"5px"}>
            <Text className="product-details">● Package Contains:</Text>
            <Text className="product-details-value">1 Product</Text>
          </Flex>
        </SimpleGrid>
        <Text className="MoreInfo" fontSize={"14px"} color={"#b52b37"}>
          More Information ▼
        </Text>
      </Stack>
    </>
  );
};

export default ImageComp;
