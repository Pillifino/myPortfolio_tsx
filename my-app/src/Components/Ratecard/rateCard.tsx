import React from 'react'


import { Flex, Text, Button, Spacer } from '@chakra-ui/react'

import {AiFillLike,AiOutlineLike} from 'react-icons/ai'


function RateCard() {
  return (
    <div>
      <Flex
        position="relative"
        top="15vh"
        zIndex="99"
        h="35vh"
        w="80vw"
        boxShadow='lg'
        borderRadius="40px"
        color="white"
        bg='white'
        alignItems="center"
        justify="center"
        flexDirection="column"
      >
        <Text
          textAlign="center"
          pt="5vh"
          height="25vh"
          w="100%"
          h="50%"
          color="black"
          fontSize="3xl">
          Rate My Portfolio!
        </Text>
        {/* Rate Buttons */}
        <Flex
        // bg="green"
        w="100%"
        h="50%"
        justify="center"
        alignItems="center"
        >
          <Spacer/>
          <Spacer/>
          <Button 
          colorScheme='blue'
          bg="white"
          w="30%"
          h="60%"
          color="bgAccent"
          border="solid black 2px"
          >
            <AiFillLike size="2em"/>
          </Button>
          <Spacer/>
          <Button 
          colorScheme='blue'
          bg="bgAccent"
          w="30%"
          h="60%"
          >
            <AiOutlineLike size="2em"/>          
          </Button>
          <Spacer/>
          <Spacer/>
        </Flex>
      </Flex>
    </div>
  )
}

export default RateCard
