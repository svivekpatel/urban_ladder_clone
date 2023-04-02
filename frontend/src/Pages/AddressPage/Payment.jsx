import { Box, Grid } from '@chakra-ui/layout';
import React from 'react'
import PaymentMethod from '../../Components/UserSide/Address/PaymentMethod';
import PaySummary from '../../Components/UserSide/Address/PaySummary';
import PaymentNavigation from '../../Components/UserSide/Address/PaymentNavigation';
const Payment = () => {
    return (
        <>
            <Box w={{ base: "98%", md: "90%", lg: "75%" }} margin={"auto"} pt={"150px"}>
                <PaymentNavigation />
                <Grid templateColumns={{ sm: "100%", md: "100%", lg: "60% 40%" }} gap={"10px"}>
                    <PaymentMethod />
                    <PaySummary />
                </Grid>
            </Box>
        </>


    )
}

export default Payment;