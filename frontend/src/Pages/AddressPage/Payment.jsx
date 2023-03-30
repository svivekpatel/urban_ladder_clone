import { Box, Grid } from '@chakra-ui/layout';
import React from 'react'
import Navigation from '../../Components/UserSide/Address/Navigation';
import PaymentMethod from '../../Components/UserSide/Address/PaymentMethod';
import PaySummary from '../../Components/UserSide/Address/PaySummary';
import Footer from '../../Components/UserSide/Footer/Footer';
import Navbar from '../../Components/UserSide/Navbar/Navbar';
const Payment = () => {
    return (
        <>
          <Box w={{ base: "98%", md: "90%", lg: "75%" }} margin={"auto"} pt={"150px"}>
            <Navbar/>
            <Navigation/>
            <Grid templateColumns={{ sm: "100%", md: "100%", lg: "60% 40%" }} gap={"10px"}>
                <PaymentMethod/>
                <PaySummary />
            </Grid>
        </Box>
        <Footer/>
        </>
      

    )
}

export default Payment;