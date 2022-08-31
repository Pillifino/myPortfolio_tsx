import React from 'react'

import { Flex, Heading, Spacer, Text, Icon } from '@chakra-ui/react'

// Icons stuff
import { Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Nav() {
  return (
    <div>
      <Flex
        bg="Black"
        w="100%"
        h="12vh"
        position="fixed"
        justify="space-evenly"
        pl={["0","0","10","10"]}
        pr={["0","0","10","10"]}
        zIndex="100"
      >
        {/* Logo & Sections */}
        <Flex
          // bg="red"
          h="100%"
          w="65%"
          alignItems="center"
        >
          <Heading
            color="white"
          >
            My Portfolio
          </Heading>
          <Spacer />
          <Spacer />
          <Spacer />
          <Text
            fontSize="md"
            color="white"
          >
            Home
          </Text>
          <Spacer />
          <Text
            fontSize="md"
            color="white"
          >
            Skills
          </Text>
          <Spacer />
          <Text
            fontSize="md"
            color="white"
          >
            Projects
          </Text>
        </Flex>
        {/* Contact */}
        <Flex
          // bg="blue"
          h="100%"
          w="35%"
          alignItems="center"
          pt="2"
          pl="20"
        >
          <Link href="https://github.com/Pillifino" target="_blank">
            <Icon as={FaGithub} boxSize="1.5em" color="White" _hover={{ boxSize:"1.8em" }} transition=".3s" />
          </Link>
          <Spacer/>
          <Link href='https://www.linkedin.com/in/berrnarddinodizon/' target="_blank">
            <Icon as={FaLinkedin} boxSize="1.5em" color="White" _hover={{ boxSize:"1.8em" }} transition=".3s" />
          </Link>
          <Spacer/>
          <Link href='https://twitter.com/Devsea_Dino' target="_blank">
            <Icon as={FaTwitter} boxSize="1.5em" transform={{ boxSize: "6em" }} color="White" _hover={{ boxSize:"1.8em" }} transition=".3s" />
          </Link>
          <Spacer/>
          <Flex
          border="solid white 1px"
          h="75%"
          w="35%"
          alignItems="center"
          justify="center"
          >
            <Text
            color="white"
            >
              Let's Connect
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default Nav
