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
      >
        <Text fontSize="2xl">
          Skills
        </Text>
        {/* Add Carousel Here */}
      </Flex>
    </div>
  )
}

export default SkillCard
