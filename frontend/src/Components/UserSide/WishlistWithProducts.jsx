import React from "react";
import { Stack, Text, SimpleGrid, Image, Flex, Button } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

const WishlistWithProducts = ({ data, setReload, reload }) => {
  const handleDelete = async (id) => {
    await axios.delete(`https://lime-tough-coati.cyclic.app/wishlist/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setReload(!reload);
  };
  return (
    <>
      <Text
        pt={{ base: "130px", md: "180px" }}
        pb={{ base: "30px" }}
        m="auto"
        align={"center"}
        fontFamily={"serif"}
        color="navy"
        fontSize={"30px"}
      >
        My Wishlist
      </Text>
      <Stack
        p={{ base: "5px", md: "20px" }}
        w={{ base: "97%", md: "70%" }}
        m="auto"
      >
        <SimpleGrid gap="15px" rowGap={"30px"} columns={{ base: 1, md: 3 }}>
          {data &&
            data.map((el, i) => {
              return (
                <Stack
                  boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                  transition={"300ms"}
                  key={i}
                  borderBottom={"2px solid #B52B37"}
                  borderTop={"2px solid #B52B37"}
                  borderTopLeftRadius={"30px"}
                  borderBottomRightRadius={"30px"}
                  lineHeight={"20px"}
                  cursor={"pointer"}
                  textAlign={"center"}
                  p="20px 8px 35px 8px"
                >
                  <Link to={`/product/${el.id}`}>
                    <Image
                      transition="300ms"
                      _hover={{
                        transform: "scale(1.1)",
                        borderRadius: "20px",
                      }}
                      src={el.img}
                    />
                    <Text
                      transition="300ms"
                      _hover={{
                        textDecor: "underLine",
                        textDecorationColor: "#B52B37",
                        color: "#B52B37",
                      }}
                      p="10px"
                      mt={"15px"}
                      mb="10px"
                      align={"left"}
                    >
                      {el.name}
                    </Text>
                  </Link>
                  <Flex p={"0px 10px"} justify={"space-between"} align="center">
                    <Text fontWeight={"500"}> {el.price}</Text>
                    <Button
                      onClick={() => handleDelete(el.id)}
                      transition="300ms"
                      border={"2px solid #B52B37"}
                      _hover={{
                        color: "white",
                        bg: "#B52B37",
                      }}
                      bg="transparent"
                      color="#B52B37"
                      fontSize={"13px"}
                    >
                      Remove Product
                    </Button>
                  </Flex>
                </Stack>
              );
            })}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default WishlistWithProducts;
