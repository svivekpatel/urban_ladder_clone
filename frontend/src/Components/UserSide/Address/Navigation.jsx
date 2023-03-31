import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

const Navigation = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Breadcrumb fontSize={"30px"} color={"gray"} p={"20px"}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Cart</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#' color={"#61171d"} fontWeight={"bold"}>Address</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    </Box>
  )
}

export default Navigation;


