import React from "react";

// Nav
import Nav from "../../Components/Nav/nav";

// Image
import { Image } from '@chakra-ui/react'
import Background from "../../Assets/Images/background.jpg";

function Home() {
  return (
    <div>
      <Nav/>
        <Image 
        src={Background}
        fit="fill" 
        alt='svg image'/>
    </div>
  );
}

export default Home;
