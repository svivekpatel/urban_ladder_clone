import { useToast, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsHeart } from "react-icons/bs";
import { MdCompare } from "react-icons/md";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { ColorForChair, ColorForSofa, ColorForBed } from "./ColorForProducts";
import WarrantyComp from "./WarrantyComp";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const AddToCart = ({ data, bg }) => {
  const toast = useToast();
  const [reload, setReload] = React.useState(false);
  const { ID } = useParams();
  const [wishlist, setWishlist] = React.useState(false);
  const navigate = useNavigate();

  const getWishlistData = async (id) => {
    try {
      await axios.get(`http://localhost:3000/wishlist`).then((res) => {
        res.data.forEach((el) => {
          if (el.id === +id) {
            setWishlist(true);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getWishlistData(ID);
  }, [reload]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/wishlist/${id}`);
    setWishlist(false);
    toast({
      title: `Product removed from wishlist`,
      position: "bottom",
      status: "success",
      isClosable: true,
    });
  };

  const handleWishlist = async (id, img, name, price) => {
    await axios
      .post("http://localhost:3000/wishlist", {
        id,
        productId: Date.now(),
        img,
        name,
        price,
      })
      .then(() => {
        setReload(!reload);
      });
    toast({
      title: `Product Wishlisted`,
      position: "bottom",
      status: "success",
      isClosable: true,
    });
  };

  const handleCart = async (uid) => {
    await axios
      .post("http://localhost:3000/cart", {
        id: Date.now(),
        productId: uid,
      })
      .then(() => navigate("/checkout"));
  };
  return (
    <>
      <Stack m="auto" w={{ base: "100%", sm: "60%", md: "28%" }}>
        <Flex
          justify={{ base: "center", md: "" }}
          gap={{ base: "30px", md: "10px" }}
          align={"center"}
        >
          <Flex
            onClick={() =>
              wishlist
                ? handleDelete(data.id)
                : handleWishlist(data.id, data.img, data.name, data.price)
            }
            cursor={"pointer"}
            gap={"5px"}
            align="centers"
          >
            {wishlist ? (
              <BsFillArrowThroughHeartFill
                fontSize={{ base: "1.3rem", md: "1.1rem" }}
                color={"#b52b37"}
              />
            ) : (
              <BsHeart
                color={"#b52b37"}
                fontSize={{ base: "1.3rem", md: "1.1rem" }}
              />
            )}
            {wishlist ? (
              <Text
                color={"#b52b37"}
                fontSize={{ base: "12px", md: "11px" }}
                className="smallText"
              >
                Wishlisted
              </Text>
            ) : (
              <Text
                fontSize={{ base: "12px", md: "11px" }}
                className="smallText"
              >
                Add to Wishlist
              </Text>
            )}
          </Flex>
          <Stack height={"30px"} borderLeft={"1px solid"} opacity="50%"></Stack>
          <Flex cursor={"pointer"} gap={"5px"} align="centers">
            <MdCompare
              fontSize={{ base: "1.3rem", md: "1.1rem" }}
              color={"#b52b37"}
            />
            <Text fontSize={{ base: "12px", md: "11px" }} className="smallText">
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
            pt={{ base: "3%", sm: "5%", md: "0%", lg: "3%" }}
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

        {Object.keys(data).length > 0 && data.name.includes("Chair") ? (
          <ColorForChair />
        ) : (
          ""
        )}
        {Object.keys(data).length > 0 && data.name.includes("Bed") ? (
          <ColorForBed />
        ) : (
          ""
        )}
        {Object.keys(data).length > 0 && data.name.includes("Sofa") ? (
          <ColorForSofa />
        ) : (
          ""
        )}

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
          onClick={() => handleCart(data.id)}
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
