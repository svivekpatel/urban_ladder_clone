import { Box, Grid } from '@chakra-ui/layout';
import React from 'react'
import Ship from '../../Components/UserSide/Address/Ship';
import Navigation from '../../Components/UserSide/Address/Navigation';
import Navbar from '../../Components/UserSide/Navbar/Navbar';
import Summary from '../../Components/UserSide/Address/Summary';
import Footer from '../../Components/UserSide/Footer/Footer';

const Address = () => {
    return (
        <>
            <Box w={{ base: "98%", md: "90%", lg: "75%" }} margin={"auto"} pt={"150px"}>
              
                <Navigation />
                <Grid templateColumns={{ sm: "100%", md: "100%", lg: "60% 40%" }} gap={"10px"}>
                    <Ship />
                    <Summary />
                </Grid>
            </Box>
        </>

    )
}

export default Address;
