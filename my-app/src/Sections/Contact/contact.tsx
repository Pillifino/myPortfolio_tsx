import React from 'react'

import ContactBackground from "../../Assets/Images/contact.jpg"

import { Flex, Image } from "@chakra-ui/react"

function Contact() {
  return (
    <div>
      <Flex
      bg="white"
      h="100vh"
      w="100vw"
      >
        <Image
        src={ContactBackground}
        boxSize="xl"
        objectFit="cover"
        h="100%"
        alt='svg image'
        w="100%"
        />
      </Flex>
    </div>
  )
}

export default Contact
