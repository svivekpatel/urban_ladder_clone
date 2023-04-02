import { Box, Grid } from '@chakra-ui/layout';
import React from 'react'
import Ship from '../../Components/UserSide/Address/Ship';
import AddressNavigation from '../../Components/UserSide/Address/AddressNavigation';
import AddressSummary from '../../Components/UserSide/Address/AddressSummary';

const Address = () => {
    return (
        <>
            <Box w={{ base: "98%", md: "90%", lg: "75%" }} margin={"auto"} pt={"150px"}>

                <AddressNavigation/>
                <Grid templateColumns={{ sm: "100%", md: "100%", lg: "60% 40%" }} gap={"10px"}>
                    <Ship />
                    <AddressSummary />
                </Grid>
            </Box>
        </>

    )
}

export default Address;
