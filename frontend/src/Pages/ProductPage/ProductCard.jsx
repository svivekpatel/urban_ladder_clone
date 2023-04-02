import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
// import { BiHeart } from "react-icons/bi";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductCard = ({ _id, img, title, price, description, category }) => {
  return (
    <Box
      bg="white"
      cursor="pointer"
      p="6"
      rounded="md"
      _hover={{ boxShadow: "md", transition: "box-shadow 0.2s ease-in-out" }}
    >
      <Box mt={5}>
        <Flex justifyContent="space-between" alignItems="center" m="0px 10px">
          <Text
            border="1px solid red"
            bg="red"
            color="white"
            p={1}
            borderRadius="2px"
          >
            35% discount
          </Text>
          {/* <BiHeart fontSize="25px" color="red" /> */}
        </Flex>
      </Box>
      <Box mt={7}>
        <Link to={`/product/${_id}`}>
          {" "}
          <Image src={img} alt="pic" w="100%" h="250px" />
        </Link>
      </Box>
      <Text textAlign="center">{description}</Text>
      <Text textAlign="center" color="teal">
        {title}
      </Text>
      <Text textAlign="center" color="teal">
        {category}
      </Text>
      <Text textAlign="center" color="teal">
        ₹{price}
      </Text>
      <Button
        bg="red"
        color="white"
        display="block"
        m="auto"
        mt={4}
        _hover={{ bg: "teal" }}
      >
        Add To Cart
      </Button>
    </Box>
  );
};

export default ProductCard;
