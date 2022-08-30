import React from 'react'

import ContactBackground from "../../Assets/Images/contact.jpg"

import { Flex, Image, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Text } from "@chakra-ui/react"
import RateCard from '../../Components/Ratecard/rateCard'

function Contact() {
  return (
    <div>
      <Flex
        bg="white"
        h="100vh"
        w="100vw"
        position="relative"
        justify="center"
        alignItems="center"
        flexDirection="column"
      >
        <Image
          src={ContactBackground}
          boxSize="xl"
          objectFit="cover"
          h="100%"
          alt='svg image'
          w="100%"
        />
        <Flex
          // bg="green"
          flexDirection="column"
          position="absolute"
          justify="center"
          alignItems="center"
          h="100%"
          w="80%"
          pt="7vh"
        >
          <Text
            // bg="blue"
            w="100%"
            fontSize="4xl"
            color="white"
          >
            Contact Me
          </Text>
          {/* Form */}
          <FormControl
            // bg="red"
            h="60%"
          >
            <Input
              color="white"
              placeholder="First Name"
              bg="black"
              opacity=".5"
              w="50%"
              h="20%"
              borderRadius="20px"
            />
            <Input
              color="white"
              placeholder="Last Name"
              bg="black"
              opacity=".5"
              w="50%"
              h="20%"
              borderRadius="20px"
            />
            <Input
              color="white"
              placeholder="Last Name"
              type='email'
              bg="black"
              opacity=".5"
              w="50%"
              h="20%"
              borderRadius="20px"
            />
            <Input
              color="white"
              placeholder="Phone Number"
              bg="black"
              opacity=".5"
              w="50%"
              h="20%"
              borderRadius="20px"
            />
            <Input
              color="white"
              placeholder="Message"
              bg="black"
              opacity=".5"
              w="100%"
              h="60%"
              borderRadius="20px"
            />
          </FormControl>
          <RateCard />
        </Flex>
      </Flex>
    </div>
  )
}

export default Contact
