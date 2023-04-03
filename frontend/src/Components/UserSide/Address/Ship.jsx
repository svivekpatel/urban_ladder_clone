
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input'
import { Box, Flex, Text } from '@chakra-ui/layout'

import {
    Textarea,
} from '@chakra-ui/react'
import Bill from './Bill'
import { useState } from 'react'

const Ship = () => {


    return (
        <Box>
            <Box p={"40px"} border={"1px solid gray"} color={"gray.700"} mb={"10px"}>

                <Flex justify={"start"} mb={"10px"}>
                    <Text fontSize={"24px"} fontWeight={"500"} letterSpacing={"0.1em"}>Shipping Address</Text>
                </Flex>

                <hr />

                <Box mb={"16px"} mt={"20px"}>
                    <FormControl isRequired display={"flex"}>
                        <FormLabel w={"30%"}>Email ID</FormLabel>
                        <Input placeholder='Email ID' borderRadius={"none"} />
                    </FormControl>
                </Box>

                <Box mb={"16px"}>
                    <FormControl isRequired display={"flex"}>
                        <FormLabel w={"30%"}>Pin Code</FormLabel>
                        <Input placeholder='Pin Code' borderRadius={"none"} />
                    </FormControl>
                </Box>

                <Box mb={"16px"}>
                    <FormControl isRequired display={"flex"}>
                        <FormLabel w={"30%"}>Address</FormLabel>
                        <Textarea placeholder='35 character limit, continue below.' borderRadius={"none"} />
                    </FormControl>
                </Box>

                <Box mb={"16px"}>
                    <FormControl isRequired display={"flex"}>
                        <FormLabel w={"30%"}>First Name</FormLabel>
                        <Input placeholder={"First Name"} borderRadius={"none"} />
                    </FormControl>
                </Box>

                <Box mb={"16px"}>
                    <FormControl isRequired display={"flex"}>
                        <FormLabel w={"30%"}>Last Name</FormLabel>
                        <Input placeholder={"Last Name"} borderRadius={"none"} />
                    </FormControl>
                </Box>

                <Box>
                    <FormControl isRequired display={"flex"}>
                        <FormLabel w={"30%"}>Mobile Number</FormLabel>
                        <InputGroup>
                            <InputLeftAddon borderRadius={"none"} children='+91' />
                            <Input borderRadius={"none"} type='tel' />
                        </InputGroup>
                    </FormControl>
                </Box>
            </Box>
            <Bill />
        </Box>

    )
}

export default Ship;