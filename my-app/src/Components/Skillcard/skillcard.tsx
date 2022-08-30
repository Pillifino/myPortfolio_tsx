import React from 'react'

import { Flex, Text } from '@chakra-ui/react'

function SkillCard() {
  return (
    <div>
      <Flex
        position="relative"
        bottom="20vh"
        zIndex="99"
        h="100%"
        w="80vw"
        boxShadow='lg'
        borderRadius="40px"
        color="white"
        bg='bgAccent'
        alignItems="center"
        justify="center"
        flexDirection="column"
      >
        <Text 
        textAlign="center"
        pt="5vh"
        height="25vh"
        w="100%"
        fontSize="2xl">
          Skills
        </Text>
        {/* Carousel here */}
      </Flex>
    </div>
  )
}

export default SkillCard
