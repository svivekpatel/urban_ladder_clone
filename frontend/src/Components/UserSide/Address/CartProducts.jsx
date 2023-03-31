import { Divider, Flex, Link } from '@chakra-ui/layout';
import React from 'react'
import {
    Button,
} from '@chakra-ui/react'

import { useState, useEffect } from "react";
import { Box, Image, Text, Select, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import axios from "axios";

function CartProducts() {



    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get("").then((response) => {
            setCartItems(response.data);
        });
    }, []);

    const handleQuantityChange = (itemIndex, event) => {
        const newCartItems = [...cartItems];
        newCartItems[itemIndex].quantity = event.target.value;
        setCartItems(newCartItems);
    };


    const handleDeleteItem = (itemIndex, itemId) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(itemIndex, 1);
        setCartItems(newCartItems);
        axios.delete(``);
    }



    return (
        <Box p={"30px"} border={"1px solid gray"}>

            <Text fontSize={"24px"} fontWeight={"500"} letterSpacing={"0.1em"}>Products</Text>

            <Divider mt={"8px"} />





            {
                cartItems.length<0 ? <Box>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Item</Th>
                                <Th>Item Price</Th>
                                <Th>Quantity</Th>
                                <Th>Total Price</Th>
                                <Th>Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {cartItems.map((item, index) => (
                                <Tr key={index}>
                                    <Td display="flex" alignItems="center">
                                        <Image src={item.image[0]} alt={item.name} w={"100px"} mr={4} />
                                        <Box>
                                            <Text fontWeight="bold">{item.name}</Text>
                                        </Box>
                                    </Td>
                                    <Td>${item.price}</Td>
                                    <Td>
                                        <Select
                                            value={item.quantity}
                                            onChange={(event) => handleQuantityChange(index, event)}
                                        >
                                            {[1, 2, 3, 4, 5].map((quantity) => (
                                                <option key={quantity} value={quantity}>
                                                    {quantity}
                                                </option>
                                            ))}
                                        </Select>
                                    </Td>
                                    <Td>${item.price * (item.quantity || 1)}</Td>
                                    <Td>
                                        <Button
                                            color="#61171d"
                                            bg={"none"}
                                            size="sm"
                                            onClick={() => handleDeleteItem(index, item.id)}
                                        >
                                            <u>Remove</u>

                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>

                    : <Flex mt={"20px"} mb={"40px"}>
                        <Text>Your basket is currently empty. .</Text>
                        <Link ><Text as={"u"} color={"#61171d"}> Continue Shopping.</Text></Link>
                    </Flex>
            }
        </Box>

    )
}

export default CartProducts;