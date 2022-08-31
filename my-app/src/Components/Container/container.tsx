import React from "react";

// Components
import Footer from "../Footer/footer";
// Sections
import Home from "../../Sections/Home/home";
import Skills from "../../Sections/Skills/skills";
import Projects from "../../Sections/Projects/projects";
import Contact from "../../Sections/Contact/contact";

// Chakra
import { Flex } from "@chakra-ui/react";

// Smooth Scroll

function Container() {
  return (
    <>
      <div id="home"><Home /></div>
      <Flex
        bg="bg"
        height="300vh"
        w="100vw"
        justify="center"
      >
        <Flex
          // bg="red"
          width="100vw"
          justify="flex-start"
          alignItems="center"
          flexDirection="column"
        >
            <Skills />
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
          <Footer />
        </Flex>
      </Flex>
    </>
  );
}

export default Container;
