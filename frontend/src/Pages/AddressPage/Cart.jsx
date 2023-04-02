import { Box, Grid } from '@chakra-ui/layout'
import React from 'react'
import CartSummary from '../../Components/UserSide/Address/CartSummary'
import CartProducts from '../../Components/UserSide/Address/CartProducts'
import Navigation from '../../Components/UserSide/Address/AddressNavigation'
import CartNavigation from '../../Components/UserSide/Address/CartNavigation'


const Cart = () => {
  return (
    <Box w={{ base: "98%", md: "90%", lg: "75%" }} margin={"auto"} pt={"150px"}>
      <CartNavigation />
      <Grid templateColumns={{ sm: "100%", md: "100%", lg: "60% 40%" }} gap={"10px"}>
        <CartProducts />
        <CartSummary />
      </Grid>
    </Box>
  )
}

export default Cart;