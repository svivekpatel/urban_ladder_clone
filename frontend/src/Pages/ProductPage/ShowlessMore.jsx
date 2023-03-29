import React, { useState } from 'react';
import { Box,Button } from "@chakra-ui/react";

const ShowlessMore = ({children,limit}) => {
   const[showMore,setShowMore]=useState(false);

   const toggleBtn=()=>{
       setShowMore((prev)=> !showMore)
   }

  return (
    <Box mt={4}>
        {showMore ?  children : children.substr(0,limit)}
         <Button colorScheme='red' variant='link' onClick={toggleBtn}>{showMore ? "..Less" : "...More"}</Button>
    </Box>
  )
}

export default ShowlessMore