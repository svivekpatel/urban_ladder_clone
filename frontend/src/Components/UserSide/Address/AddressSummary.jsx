import { Button, Image } from '@chakra-ui/react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Gst from './Gst';
import { Link } from 'react-router-dom';

function AddressSummary() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("").then((response) => {
      setCartItems(response.data);
    });
  }, []);
  let subtotals = 0;
  for (let i = 0; i < cartItems.length; i++) {
    subtotals += cartItems[i].price;
  }
  return (
    <Box >

      <Box border={"1px solid gray"} p={"30px"} color={"gray.700"} mb={"10px"}>
        <Flex justify={"space-between"} align={"center"} mb={"10px"}>
          <Text fontSize={"24px"} fontWeight={"500"} letterSpacing={"0.1em"}>Order Summary</Text>
        </Flex>
        <hr />
        <Box color={"red"}>
          Product details
        </Box>
        <hr />

        <Flex justify={"space-between"} align={"center"} mt={"20px"}>
          <Text>Order Total</Text>
          <Text>₹{subtotals || 0}</Text>
        </Flex>

        <hr />

        <Flex justify={"space-between"} align={"center"}>
          <Text>Discounts</Text>
          <Text>TBD</Text>
        </Flex>

        <hr />

        <Flex justify={"space-between"} align={"center"}>
          <Text>Delivery Charges</Text>
          <Text color={"green"}>FREE</Text>
        </Flex>

        <hr />



        <Flex color={"blackAlpha.800"} justify={"space-between"} align={"center"}>
          <Text>Total Payable Amount</Text>
          <Text>₹{subtotals || 0}</Text>
        </Flex>

        <hr />

        <Flex fontWeight={"700"} color={"blackAlpha.800"} justify={"space-between"} align={"center"}>
          <Text>Booking Amount (Pay Now)</Text>
          <Text>₹{subtotals || 0}</Text>
        </Flex>

        <Box mt={"20px"} backgroundColor={"gray.100"} p={"10px"}> 
          <Flex justify={"center"} align={"center"}> 

            <Box>
              <Image src='https://static.thenounproject.com/png/1471091-200.png' w={"40px"} mr={"20px"}/>
            </Box>
            <Box>
              <Text>No Cost EMIs from ₹6,743</Text>
              <Text>Other EMIs from ₹972 <Link color={"#61171d"}>Learn More</Link> </Text>
            </Box>
          </Flex>
        </Box>
        <Link to="/payment">
        <Button mt={"20px"} w={"100%"} bg={"#61171d"} color={"white"}>SAVE AND CONTINUE</Button>
        </Link>
      </Box>
      <Gst/>
    </Box>
  )
}

export default AddressSummary