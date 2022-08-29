import React from "react";

// Nav
import Nav from "../../Components/Nav/nav";

// Image
import { Container, Flex, Image, Text, AspectRatio } from '@chakra-ui/react'
import Background from "../../Assets/Images/background.jpg";

function Home() {
  return (
    <div>
      <Nav />
      <Flex
        width="100vw"
        height="80vh"
        position="relative"
      >
        <Image
          src={Background}
          boxSize="xl"
          objectFit="cover"
          h="100%"
          alt='svg image'
          w="100%"
          />
        {/* <AspectRatio w="null" ratio={4 / 3}>
          <Image src={Background} alt='background' objectFit='cover' />
        </AspectRatio> */}
        <Text
          bg="rgba(0,0,0,0.50)"
          border="solid white .8px"
          color="white"
          fontSize="3xl"
          textAlign="center"
          position="absolute"
          top="0"
          bottom="40"
          left="0"
          right="0"
          height="fit-content"
          width="fit-content"
          margin="auto"
        >Hello! I'm Dino</Text>
        <Text
          bg="rgba(105,105,105,0.70)"
          border="solid white .8px"
          color="white"
          fontSize="sm"
          textAlign="center"
          position="absolute"
          top="0"
          bottom="14"
          left="0"
          right="0"
          height="fit-content"
          width="fit-content"
          margin="auto"
        >MERN Stack Engineer</Text>
      </Flex>
    </div>
  );
}

export default Home;
