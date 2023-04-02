import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Select,
  Checkbox,
  Spacer,
  Button,
  RadioGroup,
  Radio,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import ShowlessMore from "./ShowlessMore";
import ProductCard from "./ProductCard";

const Product = () => {
  const [button, setButton] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://lime-tough-coati.cyclic.app/products`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }, []);

  return (
    <Box>
      <Box
        w="70%"
        display={"block"}
        m={"auto"}
        mt={{ base: "7rem", md: "10rem" }}
      >
        <Heading size="xl" textAlign={"center"} color="teal">
          All Sofas
        </Heading>
        <Text textAlign={"center"} color="red" mt={2}>
          (1629 Products)
        </Text>
        <ShowlessMore limit={200}>
          Perfect for the whole family to pile onto for game nights or for you
          to lounge on while binging your favorite TV shows, the sofa is that
          cozy piece of furniture that can truly bring any room to life.
          Available in so many exciting designs, shapes, and seating
          arrangements, the sofa design can be easily customized to suit your
          aesthetic taste and seating preferences. From L-shaped sectionals
          large enough to host a whole cohort of guests to leather sofas that
          will fit right in a modern rustic atmosphere, the options are endless.
          A sturdy frame, upholstery that doesn’t fade, and stuff that isn’t
          prone to sagging are also essential if you want a sofa that will last
          you for years to come.
        </ShowlessMore>
        <Box
          mt={6}
          borderTop="1px solid teal"
          borderBottom="1px solid teal"
          pt={4}
          pb={2}
          position="relative"
        >
          <Flex>
            <Box w="52%">
              <Text>FILTERS</Text>
              <Stack spacing={2} direction="row">
                <Button
                  rightIcon={button === "Button1" ? null : <TriangleDownIcon />}
                  w="20%"
                  size="sm"
                  bg="#61171d"
                  color="white"
                  borderRadius="10px"
                  _hover={{ bg: "teal" }}
                  onMouseEnter={() => setButton("Button1")}
                >
                  Price
                </Button>
                {button === "Button1" && (
                  <Box
                    bg="white"
                    position="absolute"
                    top="89px"
                    left="0px"
                    border="1px solid teal"
                    w="40%"
                    overflowY="scroll"
                    h="300px"
                    onMouseLeave={() => setButton(null)}
                  >
                    <Text color="red" mt={4} ml={4}>
                      Price
                    </Text>
                    <RadioGroup ml={5} mt={5}>
                      <Stack spacing={30} direction="row">
                        <Radio colorScheme="blue">₹8961-₹51228</Radio>
                        <Radio colorScheme="blue">₹51229-₹93495</Radio>
                      </Stack>
                    </RadioGroup>
                    <RadioGroup ml={5} mt={5}>
                      <Stack spacing={30} direction="row">
                        <Radio colorScheme="blue">₹93496-₹135,762</Radio>
                        <Radio colorScheme="blue">₹135,763-₹178,029</Radio>
                      </Stack>
                    </RadioGroup>
                    <RadioGroup ml={5} mt={5}>
                      <Stack spacing={30} direction="row">
                        <Radio colorScheme="blue">₹178,030-₹220,300</Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>
                )}
                <Button
                  rightIcon={button === "Button2" ? null : <TriangleDownIcon />}
                  w="22%"
                  size="sm"
                  bg="#61171d"
                  color="white"
                  borderRadius="10px"
                  _hover={{ bg: "teal" }}
                  onMouseEnter={() => setButton("Button2")}
                >
                  Brand
                </Button>
                {button === "Button2" && (
                  <Box
                    bg="white"
                    position="absolute"
                    top="89px"
                    left="80px"
                    border="1px solid teal"
                    w="22%"
                    overflow="auto"
                    h="300px"
                    onMouseLeave={() => setButton(null)}
                  >
                    <Text color="red" mt={4} ml={4}>
                      Brand Name
                    </Text>
                    <Checkbox mt={2} ml={4}>
                      By Urban Ladder Create
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Home Lifestylez
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Adonica
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Woodcasa
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Arra
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Urban Ladder
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Adam Homez
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Adorn Homez
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Febonic
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Durian
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Urban Living
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Mintcasa
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Nilkamal
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      By Furnitech
                    </Checkbox>
                  </Box>
                )}
                <Button
                  rightIcon={button === "Button3" ? null : <TriangleDownIcon />}
                  w="33%"
                  bg="#61171d"
                  size="sm"
                  color="white"
                  borderRadius="10px"
                  _hover={{ bg: "teal" }}
                  onMouseEnter={() => setButton("Button3")}
                >
                  MaterialType
                </Button>
                {button === "Button3" && (
                  <Box
                    bg="white"
                    position="absolute"
                    top="89px"
                    left="150px"
                    border="1px solid teal"
                    w="20%"
                    overflowY="scroll"
                    h="300px"
                    onMouseLeave={() => setButton(null)}
                  >
                    <Text color="red" mt={4} ml={4}>
                      Sofa Material
                    </Text>
                    <Checkbox mt={2} ml={4}>
                      Fabric
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      Leatherette
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      Solid-Wood
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      Leather
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      Fabric & Leatherette
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      Half Leather
                    </Checkbox>
                  </Box>
                )}

                <Button
                  rightIcon={button === "Button4" ? null : <TriangleDownIcon />}
                  w="38%"
                  bg="#61171d"
                  size="sm"
                  color="white"
                  borderRadius="10px"
                  _hover={{ bg: "teal" }}
                  onMouseEnter={() => setButton("Button4")}
                >
                  Seating Capacity
                </Button>
                {button === "Button4" && (
                  <Box
                    bg="white"
                    position="absolute"
                    top="89px"
                    left="280px"
                    border="1px solid teal"
                    w="20%"
                    overflowY="scroll"
                    h="300px"
                    onMouseLeave={() => setButton(null)}
                  >
                    <Text color="red" mt={4} ml={4}>
                      Custom Set-Sofas
                    </Text>
                    <Checkbox mt={2} ml={4}>
                      3-Seater
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      2-Seater
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      1-Seater
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      4-Seater
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      5-Seater
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      6-Seater
                    </Checkbox>
                  </Box>
                )}
                <Button
                  rightIcon={button === "Button5" ? null : <TriangleDownIcon />}
                  w="20%"
                  bg="#61171d"
                  size="sm"
                  color="white"
                  borderRadius="10px"
                  _hover={{ bg: "teal" }}
                  onMouseEnter={() => setButton("Button5")}
                >
                  Type
                </Button>
                {button === "Button5" && (
                  <Box
                    bg="white"
                    position="absolute"
                    top="89px"
                    left="460px"
                    border="1px solid teal"
                    w="15%"
                    overflowY="scroll"
                    h="300px"
                    onMouseLeave={() => setButton(null)}
                  >
                    <Text color="red" mt={4} ml={4}>
                      Standard Set-sofas
                    </Text>
                    <Checkbox mt={2} ml={4}>
                      None
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      3-2-Set
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      2-1-1 Set
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      3-1-1 Set
                    </Checkbox>
                    <Checkbox mt={2} ml={4}>
                      3-2-1 Set
                    </Checkbox>
                  </Box>
                )}
              </Stack>
            </Box>
            <Spacer />
            <Box w="40%">
              <Flex>
                <Box m="auto">
                  <Checkbox size="md" colorScheme="blue">
                    Exclude Out Of Stock
                  </Checkbox>
                </Box>
                <Box>
                  <Text>SORT BY</Text>
                  <Select
                    icon={<TriangleDownIcon fontSize={"12px"} />}
                    placeholder="Recommended"
                    variant="outline"
                    border="1px solid teal"
                  >
                    <option>Price:Low To High</option>
                    <option>Price:High To Low</option>
                    <option>New Arrivals</option>
                    <option>Discount</option>
                  </Select>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} w="80%" m="auto" mt={4}>
        {data.map((item) => (
          <GridItem key={item._id}>
            <ProductCard {...item} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;
