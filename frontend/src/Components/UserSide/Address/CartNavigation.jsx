import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

const CartNavigation = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Breadcrumb fontSize={"30px"} color={"gray"} p={"20px"}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#' color={"#61171d"} fontWeight={"bold"}>Cart</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Address</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    </Box>
  )
}

export default CartNavigation;


