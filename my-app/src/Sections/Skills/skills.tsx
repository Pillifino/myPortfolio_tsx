import React from 'react'

// Chakra
import { Container, Flex } from '@chakra-ui/react'

import SkillCard from '../../Components/Skillcard/skillcard'

function Skills() {
  return (
    <div>
      <Flex
        bg="green"
        w="100vw"
        height="60vh"
      >
        <Container>
          <SkillCard />
        </Container>
      </Flex>
    </div>
  )
}

export default Skills
