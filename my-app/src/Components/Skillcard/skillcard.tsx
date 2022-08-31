import React from 'react'

import { useRef } from 'react'

import { Flex, Text } from '@chakra-ui/react'
import { useInView } from "framer-motion"


function SkillCard() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <div id='skills'>
      <Flex ref={ref}
        style={{
          transform: isInView ? "none" : "translatey(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
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
