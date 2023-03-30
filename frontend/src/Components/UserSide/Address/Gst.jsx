import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Box, Flex, Text } from '@chakra-ui/layout'

function Gst() {
   
    return (
        <Box >

            <Box border={"1px solid gray"} p={"30px"} color={"gray.700"}>
                <Flex justify={"space-between"} align={"center"} mb={"10px"}>
                    <Text fontSize={"24px"} fontWeight={"500"} letterSpacing={"0.1em"}>Buying for your business?</Text>
                </Flex>
                <hr />
                <Box mb={"16px"} mt={"20px"}>
                    <FormControl display={"flex"} alignItems={"center"}>
                        <FormLabel w={"30%"}>Enter GSTIN (Optional)</FormLabel>
                        <Input placeholder='GSTIN' borderRadius={"none"} />
                    </FormControl>
                </Box>
                <Text fontSize={"13px"}>Note: GSTIN cannot be changed after placing order. Please provide a valid 
                GSTIN - if you don't, we will not be able to pass the GST credit to you. GST Registration state 
                must match the billing state. For any GSTIN belonging to a SEZ, please write to us at 
                hello@urbanladder.com before placing the order and we will ensure appropriate 
                processing of invoice(s).</Text>
            
            </Box>
        </Box>
    )
}

export default Gst;