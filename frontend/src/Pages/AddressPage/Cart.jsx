import { Box, Grid } from '@chakra-ui/layout'
import React, { useState } from 'react'
import CartSummary from '../../Components/UserSide/Address/CartSummary'
import CartProducts from '../../Components/UserSide/Address/CartProducts'
import Navigation from '../../Components/UserSide/Address/AddressNavigation'
import CartNavigation from '../../Components/UserSide/Address/CartNavigation'


const Cart = () => {
  const [reload,setReload] = useState(false)
  return (
    <Box w={{ base: "98%", md: "90%", lg: "75%" }} margin={"auto"} pt={"150px"}>
      <CartNavigation />
      <Grid templateColumns={{ sm: "100%", md: "100%", lg: "60% 40%" }} gap={"10px"}>
        <CartProducts reload={reload} setReload={setReload}/>
        <CartSummary reload={reload} setReload={setReload}/>
      </Grid>
    </Box>
  )
}

export default Cart;