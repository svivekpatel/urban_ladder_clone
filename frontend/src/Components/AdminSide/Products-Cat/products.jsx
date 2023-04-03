import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import addModel from "./addProduct";
import React, { useEffect, useState } from "react";
import ProductItems from "./products-item";
import axios from "axios";
import AddModel from "./addProduct";

const Products = () => {
  const toast = useToast();
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("mens");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, SetImage] = useState("");
  const [mid, msetId] = useState("");

  // on enter Search
  // const handleKeyDown = (e) => {
  //   let data_input = e.target.value.split("");
  //   let convert = data_input[0]?.toUpperCase();
  //   data_input[0] = convert;
  //   let searchedData = data_input.join("");
  //   if (e.key === "Enter") {
  //     searchTheData(searchedData);
  //   }
  // };
  // const searchTheData = async (searchedData) => {
  //   let res = await axios.get(
  //     `https://good-rose-kingfisher-tam.cyclic.app/product?details=${searchedData}`
  //   );
  //   let data = await res.data;
  //   data = data.filter((el) => {
  //     return el.product_title.match(searchedData);
  //   });
  //   setDatas(data);
  //   console.log(data, searchedData);
  // };
  // `````````````````````````````````toggle Status```````````````````
  const handeAdd=()=>{

  }
  const handleToggleStatus = (id, active) => {
    axios
      .delete(
        `https://lime-tough-coati.cyclic.app/products/deleteproduct/${id}`,
        {
          headers: {
            Authorization:("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI5NjcwY2RiZjUxMmYzODU0YmY0MGUiLCJpYXQiOjE2ODA0OTY4OTN9.FT6ks-zIRWvFSjip-yLVNfuthr4x-UVrjELhOj3E2O8"),
          },
        }
      )
      .then((res) => {
        handleGetData();
        active
          ? toast({
              title: "DeletedSuccessfully",
              status: "error",
              duration: 3000,
              isClosable: true,
            })
          : toast({
              title: "not deleted please login",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
      })
      .catch((err) => console.log(err));
  };

  // ``````````````````````````````````````````````````````` Editable Modal ````````````````````````````````
  const handleOpenDetails = (id, image, price, title) => {
    setTitle(title);
    setPrice(price);
    SetImage(image);
    msetId(id);
    onOpen();
  };
  //````````````````````````````````````````````````````Update Listings```````````````````````````````````````````

  const handleGetData = () => {
    axios
      .get(
        // `https://good-rose-kingfisher-tam.cyclic.app/product?category=${category}&limit=10&page=${page}`
        `https://lime-tough-coati.cyclic.app/products`,
        {
        headers: {
          Authorization:("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI5NjcwY2RiZjUxMmYzODU0YmY0MGUiLCJpYXQiOjE2ODA0OTY4OTN9.FT6ks-zIRWvFSjip-yLVNfuthr4x-UVrjELhOj3E2O8"),
        },
      }
      )
      .then((res) => setDatas(res.data))
      // console.log("datas",datas)
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI5NjcwY2RiZjUxMmYzODU0YmY0MGUiLCJpYXQiOjE2ODA0OTY4OTN9.FT6ks-zIRWvFSjip-yLVNfuthr4x-UVrjELhOj3E2O8")
    handleGetData();
  }, [page, category]);

  // add product modal
  const handleAddProduct = (title1,price1,image1) => {
    let dataToSend = {
      details: title1,
      price: +price1,
      image: image1,
    };

    axios
      .post(
        `https://lime-tough-coati.cyclic.app/products/add`,
        dataToSend,{
          headers: {
            Authorization:("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI5NjcwY2RiZjUxMmYzODU0YmY0MGUiLCJpYXQiOjE2ODA0OTY4OTN9.FT6ks-zIRWvFSjip-yLVNfuthr4x-UVrjELhOj3E2O8"),
          },
        }
      )
      .then((res) => {
        handleGetData();
        toast({
          title: `Updated Successfully`,
          status: 'success',
          isClosable: true,
        })
      })
      .catch((err) => {
        toast({
          title: `Invalid Request`,
          status: 'error',
          isClosable: true,
        })
      });
  };

  //```````````````````````````````````````````````````````````` submit modal data`````````````````````````````
  const handleSubmitModalDetails = () => {
    let dataToSend = {
      details: title,
      price: +price,
      image: image,
    };

    axios
      .patch(
        `https://lime-tough-coati.cyclic.app/products/updateproduct/${mid}`,
        dataToSend,{
          headers: {
            Authorization:("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI5NjcwY2RiZjUxMmYzODU0YmY0MGUiLCJpYXQiOjE2ODA0OTY4OTN9.FT6ks-zIRWvFSjip-yLVNfuthr4x-UVrjELhOj3E2O8"),
          },
        }
      )
      .then((res) => {
        handleGetData();
        toast({
          title: `Updated Successfully`,
          status: 'success',
          isClosable: true,
        })
      })
      .catch((err) => {
        toast({
          title: `Invalid Request`,
          status: 'error',
          isClosable: true,
        })
      });
  };

  return (
    <Box
      // color={"black"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      // bg={"#0c0e1f"}
    >
      <Heading>Products</Heading>
      <Text color={"red.600"}>List of Products(click on image to edit the Product)</Text>
      {/* add product button */}
      <Box w={{ base: "5%", md: "15%", lg: "10%" }}>
          <AddModel handleAddProduct={handleAddProduct}/>
           
        </Box>
      {/* Table of all products */}
      <Box mt={"30px"} w={"100%"}>
        <Box display={"flex"} justifyContent={"space-between"} mb={"20px"}>
          {/* input search */}
          {/* <Input
            type={"text"}
            placeholder="Search Listings.."
            w={{ base: "40%", md: "35%", lg: "25%" }}
            onKeyDown={handleKeyDown}
          ></Input> */}
          {/* select option */}
          <Select
            // variant="flushed"
            bg="#white"
            w={{ base: "45%", md: "25%", lg: "20%" }}
            cursor={"pointer"}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option style={{ backgroundColor: "white" }} value="beds">
              Beds
            </option>
            <option style={{ backgroundColor: "white" }} defaultChecked value="sofas">
              Sofas
            </option>
            <option style={{ backgroundColor: "white" }} value="chair">
              Chairs
            </option>
          </Select>
        </Box>

        {/* all products append */}

        <Box>
          <SimpleGrid gap={5}>
            <Box
              display={{ base: "none", md: "flex" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"left"}
              boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
              padding={"10px"}
              mt={"20px"}
            >
              {/* <Box
                width={"6%"}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>S.NO</Text>
              </Box> */}
              <Box
                width={{ base: "10%", md: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>ID</Text>
              </Box>
              <Box
                width={{ base: "5%", md: "13%", lg: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>IMAGE</Text>
              </Box>
              <Box
                width={{ base: "10%", md: "27%", lg: "25%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>PRODUCTS</Text>
              </Box>
              <Box
                width={{ base: "5%", md: "7%", lg: "8%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>PRICE</Text>
              </Box>
              <Box
                width={{ base: "5%", md: "15%", lg: "15%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>CATEGORY</Text>
              </Box>
              <Box
                w={{ base: "5%", md: "13%", lg: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>STATUS</Text>
              </Box>
            </Box>
            {console.log("data",datas)}
            {datas.map((el, i) => (
              <ProductItems
                key={el._id}
                i={i}
                {...el}
                handleOpenDetails={handleOpenDetails}
                handleToggleStatus={handleToggleStatus}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* `````````````````````````````````pagination`````````````````````````` */}
      <Box
        display={"flex"}
        width={{ base: "20%", md: "20%", lg: "15%" }}
        m={"auto"}
        mt={"10px"}
      >
        <Button
          size={{ base: "sm", md: "sm", lg: "md" }}
          colorScheme={"red"}
          isDisabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>
        <Text width={"40px"} m={"auto"} textAlign={"center"}>
          {page}
        </Text>
        <Button
          size={{ base: "sm", md: "sm", lg: "md" }}
          colorScheme={"red"}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Box>

      {/* ``````````````````````````````````````````Modal`````````````````````````````````````` */}

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "md" }}
      >
        <ModalOverlay />
        <ModalContent bg={"#0c0e1f"} color={"white"}>
          <ModalHeader>Edit Listing</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign={"center"}>
            <Avatar size={"2xl"} src={image}></Avatar>
            <Box textAlign={"left"}>
              <Text p={"10px"} cursor={"pointer"} mt={"10px"}>
                ID-{mid}
              </Text>
              <Text mt={"10px"}>Image:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={image}
                onChange={(e) => {
                  SetImage(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.image} */}
              </Input>
              <Text mt={"10px"}>Title:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.details} */}
              </Input>
              <Text mt={"10px"}>Price:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={price}
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                  console.log(e.target.value);
                }}
              >
                {/* Price- Rs {Math.floor(Number(modalDetail.product_price) * 60)} */}
              </Input>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme={"red"}
              mr={3}
              onClick={() => {
                handleSubmitModalDetails();
                onClose();
              }}
            >
              Save
            </Button>
            <Button colorScheme={"red"} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Products;
