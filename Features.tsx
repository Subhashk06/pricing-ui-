import { Box, Flex, HStack ,Icon ,Text} from '@chakra-ui/react'
import React from 'react'
import icon2 from './api/hello/icons/icon2'
import icons1 from './api/hello/icons/icons1'
import icons3 from './api/hello/icons/icons3'

export default function Features() {
  return (
    <Box m={"60px"} maxW="800px">
      <Flex>
        <HStack mr={"20px"}>
            <Icon as={icons1}/>
            <Text>30 days money back Guarantee</Text>
        </HStack>

        <HStack mr={"20px"}>
            <Icon as={icon2}/>
            <Text>No setup fees
100% hassle-free</Text>
        </HStack>


        <HStack mr={"20px"}>
            <Icon as={icons3}/>
            <Text>No monthly subscription
Pay once and for all</Text>
        </HStack>
        </Flex>
    </Box>
  )
}
