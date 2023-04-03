import { FormLabel } from '@chakra-ui/form-control';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Radio } from '@chakra-ui/radio';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Button, Image, Input } from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom';

const PaymentMethod = () => {
    const userAddress = JSON.parse(localStorage.getItem("shippingAddress")) || ""
    console.log(userAddress)
    return (

        <Box>
            <Box p={"40px"} border={"1px solid gray"} padding={"30px"}>


                <Box>
                    <Flex justify={"start"} mb={"10px"}>
                        <Text fontSize={"24px"} fontWeight={"500"} letterSpacing={"0.1em"}>Select Payment Method</Text>
                    </Flex>
                    <hr />


                    <Radio border={"2px solid gray"}>
                        <Text> Cards & EMIs (Credit/Debit) / UPI</Text>
                    </Radio>
                    <Text>Card EMI approval is at sole discretion of issuing Bank.</Text>
                    <Box mt={"20px"} backgroundColor={"gray.100"} p={"10px"}>
                        <Flex justify={"center"} align={"center"}>

                            <Box>
                                <Image src='https://static.thenounproject.com/png/1471091-200.png' w={"40px"} mr={"20px"} />
                            </Box>
                            <Flex>
                                <Text mr={"10px"}>No Cost EMIs from ₹6,743</Text>
                                <Text>Other EMIs from ₹972 <Link color={"#61171d"}>Learn More</Link> </Text>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box>
                        <FormLabel><u>Billing Address:</u></FormLabel>
                        <Box align={"start"}>
                            <Text>{`${userAddress.firstName || ""} ${userAddress.lastName || ""}`}</Text>
                            <Text>{userAddress.address || ""}</Text>
                            <Text>{`${userAddress.city || ""} ${userAddress.pinCode || ""}`}</Text>
                            <Text>{userAddress.mobileNumber || ""}</Text>

                        </Box>
                        <Box display={"flex"} justify={"center"} mt={"5px"}>
                            <Link align={"start"} as={"u"}><Text as={"u"} color={"#61171d"}>Change</Text></Link>
                        </Box>

                    </Box>


                </Box>
                <Box>
                    <Accordion mt={"20px"} allowMultiple>



                        <AccordionItem>
                            <h2 p={"20px"}>
                                <AccordionButton pt={"15px"} pb={"15px"}>
                                    <Box as="span" flex='1' textAlign='left' _hover={{ color: "#61171d" }}>
                                        Redeem Gift Card
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} display={"flex"}>
                                <Input border={"1px solid gray"} mr={"10px"} borderRadius={"none"} bg={"transparent"} />
                                <Button border={"1px solid #4B5666"} color={"#4B5666"} borderRadius={"none"} letterSpacing={".15em"} fontSize={"14px"} fontWeight={"400"} bg={"transparent"}>APPLY</Button>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
               
            </Box>
            <Text fontSize={"12px"}>By placing your order, you agree to our privacy policy and terms and conditions of use.</Text>
        </Box>

    )
}

export default PaymentMethod;