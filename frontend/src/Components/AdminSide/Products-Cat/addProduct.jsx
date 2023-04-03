import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Button,
    Avatar,
    Text,
    Box,
    useDisclosure,
  } from '@chakra-ui/react'
  import React,{ useState } from 'react';


function AddModel({handleAddProduct}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const {handleAddProduct}=handleAddProduct;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, SetImage] = useState("");
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <><Button onClick={()=>{onOpen()}}>
        Add Product
      </Button>
        <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "md" }}
      >
        <ModalOverlay />
        <ModalContent bg={"#0c0e1f"} color={"white"}>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign={"center"}>
            <Avatar size={"2xl"} src={image}></Avatar>
            <Box textAlign={"left"}>
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
                handleAddProduct(title,price,image);
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
      </>
    )
  }
// import { useState } from 'react';
  export default AddModel