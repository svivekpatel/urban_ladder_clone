import { Button, Image } from '@chakra-ui/react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function PaySummary() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("https://lime-tough-coati.cyclic.app/cart").then((response) => {
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
        <Link to="/">
        <Button mt={"20px"} w={"100%"} bg={"#61171d"} color={"white"} onClick={()=>{alert("Order Placed!")}}>PLACE ORDER</Button>
        </Link>
        
      </Box>
    </Box>
  )
}

export default PaySummary;