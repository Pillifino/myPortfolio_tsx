import React from "react";

// Components
import Nav from "../Nav/nav";
import Carousel from "../Carousel/carousel";
import RateCard from "../Ratecard/rateCard";
import SkillCard from "../Skillcard/skillcard";
import Footer from "../Footer/footer";
// Sections
import Home from "../../Sections/Home/home";
import Skills from "../../Sections/Skills/skills";
import Projects from "../../Sections/Projects/projects";
import Contact from "../../Sections/Contact/contact";

// Chakra
import { Flex, Spacer } from "@chakra-ui/react";

function Container() {
  return (
    <>
    <Home/>
      <Flex
      bg="bg"
      height="2000px"
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
          <Skills/>
          <Projects/>
          <Contact/>
        </Flex>
      </Flex>
    </>
  );
}

export default Container;
