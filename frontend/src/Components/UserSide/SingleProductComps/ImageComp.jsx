import { Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import "./imageComp.css";

const ImageComp = ({ data, bg }) => {
  return (
    <>
      <Stack pos={"relative"}>
        <Text
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          fontSize={"21px"}
          color={"#2F62AE"}
        >
          {" "}
          {data.name}
        </Text>
        <Stack pb={"20px"} w="100%">
          <Image src={data.img} />
        </Stack>
        <Text fontSize={"14px"} color={"#b52b37"}>
          PRODUCT DETAILS
        </Text>
        <SimpleGrid w={"95%"} columns={{ base: 1, lg: 2 }}>
          <Flex gap={"5px"}>
            <Text className="product-details">● Net Quantity:</Text>
            <Text className="product-details-value">{data.quantity} N</Text>
          </Flex>
          <Flex gap={"5px"}>
            <Text className="product-details">● Product Dimensions:</Text>
            <Text className="product-details-value">{data.dimensions}</Text>
          </Flex>
          <Flex gap={"5px"}>
            <Text className="product-details">● Country of Origin:</Text>
            <Text className="product-details-value">{data.country}</Text>
          </Flex>
          <Flex gap={"5px"}>
            <Text className="product-details">● Package Contains:</Text>
            <Text className="product-details-value">
              {data.quantity} {data.category}
            </Text>
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
