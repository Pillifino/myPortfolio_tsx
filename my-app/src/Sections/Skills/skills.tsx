import React from 'react'

// Chakra
import { Container, Flex } from '@chakra-ui/react'

import SkillCard from '../../Components/Skillcard/skillcard'

function Skills() {
  return (
    <div>
      <Flex
        // bg="green"
        width="100vw"
        height="60vh"
        justify="center"
      >
        <Container
          // bg="white"
          height="100%"
          maxWidth="80%"
        >
          <SkillCard />
        </Container>
      </Flex>
    </div>
  )
}

export default Skills
