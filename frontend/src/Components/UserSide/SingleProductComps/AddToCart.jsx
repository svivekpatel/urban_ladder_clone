import { Button, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsHeart } from "react-icons/bs";
import { MdCompare } from "react-icons/md";
import WarrantyComp from "./WarrantyComp";
const AddToCart = ({ data, bg }) => {
  return (
    <>
      <Stack m="auto" w={{ base: "100%", sm: "60%", md: "28%" }}>
        <Flex
          justify={{ base: "center", md: "" }}
          gap={{ base: "30px", md: "10px" }}
          align={"center"}
        >
          <Flex cursor={"pointer"} gap={"5px"} align="centers">
            <BsHeart
              color={"#b52b37"}
              fontSize={{ base: "1.3rem", md: "1.1rem" }}
            />
            <Text
              fontSize={{ base: "12px", md: "11px" }}
              opacity="50%"
              className="smallText"
            >
              Add to Wishlist
            </Text>
          </Flex>
          <Stack height={"30px"} borderLeft={"1px solid"} opacity="50%"></Stack>
          <Flex cursor={"pointer"} gap={"5px"} align="centers">
            <MdCompare
              fontSize={{ base: "1.3rem", md: "1.1rem" }}
              color={"#b52b37"}
            />
            <Text
              fontSize={{ base: "12px", md: "11px" }}
              opacity="50%"
              className="smallText"
            >
              Add to Compare
            </Text>
          </Flex>
        </Flex>

        {/* -----------------Discount Banner*/}
        <Stack pos={"relative"}>
          <Image
            w={"100%"}
            src="https://www.ulcdn.net/media/sale/product-page-tag-bg/unnamed.jpg?1572547689"
          />

          <Text
            pos={"absolute"}
            fontWeight="500"
            pl={"6%"}
            pt={{ base: "3%", sm: "5%", md: "0%", lg: "1%" }}
            color={"navy"}
            fontSize={{ base: "22px", md: "20px" }}
          >
            41% OFF
          </Text>
          <Text fontSize={"9px"}>
            * All discounts are dynamic and can change at any time.
          </Text>
        </Stack>

        {/* ---------color */}

        <Stack>
          <Text mt={"20px"} fontWeight={"500"}>
            COLOR
          </Text>

          <SimpleGrid gap={"5px"} columns={{ base: 3 }}>
            {/* --------- map colors here */}
            <Text
              border="1px solid"
              borderColor={"#b52b37"}
              align={"center"}
              p="4px 6px"
              bg="#FAFAFA"
              fontSize={"13px"}
              color="grey"
              cursor={"pointer"}
            >
              Patchwork
            </Text>
          </SimpleGrid>
        </Stack>

        {/* ----------- MRP */}

        <Flex pt={"20px"} align={"center"} justify="center" gap={"40px"}>
          <Flex fontSize={"11px"} opacity="60%" fontWeight="500" gap="5px">
            <Text>MRP</Text>{" "}
            <Text textDecor={"line-through"}>{data.strike_price}</Text>
          </Flex>

          <Flex align={"center"} direction={{ base: "row", md: "column" }}>
            <Text fontWeight={"500"} fontSize="17px">
              {data.price}
            </Text>
            <Text fontSize={"9px"}>(inclusive of all taxes)</Text>
          </Flex>
        </Flex>

        <Flex
          pt={"20px"}
          pb={"30px"}
          gap={"5px"}
          fontSize={"14px"}
          align={"center"}
        >
          <Image
            w={"11%"}
            mr="10px"
            src="https://cdn.iconscout.com/icon/free/png-256/emi-calculator-1817364-1538216.png?f=avif&w=128"
          />
          <Text>EMIs from</Text>
          <Text fontWeight={"500"}>₹366</Text>
          <Text color={"#b52b37"} textDecor="underline" cursor={"pointer"}>
            Know More
          </Text>
        </Flex>

        <Button
          transition={"200ms"}
          letterSpacing={"2px"}
          borderRadius={"0px"}
          color="white"
          bg={bg}
          _hover={{
            bg: "#b52b37",
          }}
        >
          ADD TO CART
        </Button>

        <WarrantyComp bg={bg} data={data} />
      </Stack>
    </>
  );
};

export default AddToCart;
