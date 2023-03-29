import { Divider, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./ProductLowerBody.css";
const FreeHomeDelivery = () => {
  return (
    <>
      <Stack pr={{ base: "10px", md: "30px" }} mt="20px">
        <Stack
          p="35px 35px 10px 35px"
          textAlign={"center"}
          bg={"#F6F6F6"}
          w={{ md: "96%" }}
        >
          <Text
            fontFamily={"serif"}
            borderBottom={"1px solid #B52B37"}
            borderTop={"1px solid #B52B37"}
            fontSize={"17px"}
            pb="9px"
            pt="9px"
            borderTopStartRadius="50px"
            borderTopEndRadius="5px"
            borderBottomEndRadius="50px"
            borderBottomStartRadius="5px"
          >
            "This was our first purchase from an online site and we were anxious
            about the delivery from the time we booked the product. But despite
            our worries, the whole process was hassle free."
          </Text>
          <Flex gap={"7px"} align={"center"} justify="center" fontSize="14px">
            <Text>Jinu Bobby via Facebook</Text>
            <Text cursor={"pointer"} color={"#B52B37"}>
              Read More
            </Text>
          </Flex>
        </Stack>

        <Stack
          pb={"20px"}
          lineHeight={"15px"}
          align={"center"}
          pt={"20px"}
          w={{ base: "98%", md: "30%" }}
          pos="relative"
        >
          <Image
            w={"20%"}
            src="https://cdn-icons-png.flaticon.com/512/3091/3091609.png"
          />
          <Text className="afterLine" fontSize={"13px"}>
            FREE HOME DELIVERY
          </Text>
          <Text fontSize={"12px"} opacity="70%">
            Available in select cities
          </Text>
        </Stack>
        <Divider m={"auto"} orientation="horizontal" w={"97%"} />
      </Stack>
    </>
  );
};

export default FreeHomeDelivery;
